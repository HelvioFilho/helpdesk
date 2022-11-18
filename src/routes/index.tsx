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
  const { setData } = appStore();
  useEffect(() => {
    const subscriber = auth()
      .onAuthStateChanged(response => {
        firestore()
          .collection('controller')
          .where('customer', '==', response.email)
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
            setUser(response);
            setLoading(false);
          })
      });

  }, []);

  if (loading) {
    return <Loading size={56} />;
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <SignIn />}
    </NavigationContainer>
  )
}