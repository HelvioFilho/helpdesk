import create from 'zustand';

export interface UserSettingsProps {
  email: string;
  type: string;
}

export interface ZustandProps {
  data: UserSettingsProps;
  setData: (data: UserSettingsProps) => void;
}

export const appStore = create<ZustandProps>((set) => ({
  data: {} as UserSettingsProps,
  setData: (data) => set({data}),
}));