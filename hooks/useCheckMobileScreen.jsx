"use client"
import { useContext } from 'react';
import { MyAppContext } from '../context/MyAppProvider';


function useCheckMobileScreen() {
  const { appState } = useContext(MyAppContext);
  return appState.checkDevice;
}

export default useCheckMobileScreen;