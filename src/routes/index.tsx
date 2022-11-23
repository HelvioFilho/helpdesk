import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Loading } from "../components/Loading";
import { SignIn } from "../screens/SignIn";
import { appStore } from "../services/Store";
import { AppRoutes } from "./app.routes";


export function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  const [transition, setTransition] = useState(false);

  const { setData } = appStore();

  useEffect(() => {
    if (!!user) {
      firestore()
        .collection('controller')
        .where('customer', '==', user.email)
        .get()
        .then(response => {
          const data = response.docs.map(doc => {
            const { customer, type } = doc.data();
            return {
              email: customer,
              type
            }
          });
          setData(data[0]);
        })
        .finally(() => {
          setTransition(true);
        })
    }else{
      setTransition(false);
    }
  }, [user]);

  useEffect(() => {
    const subscriber = auth()
      .onAuthStateChanged(response => {
        setUser(response);
        setLoading(false);
      });
    
    return subscriber;
  }, []);

  if (loading) {
    return <Loading size={56} />;
  }

  return (
    <NavigationContainer>
      {transition ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}