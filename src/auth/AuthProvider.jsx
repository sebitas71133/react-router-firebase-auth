import { createContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "../firebase/config";
import { login, logout, checkingCredentials } from "../store/slices/authSlice";
import { CheckingAuth } from "../components/CheckingAuth";

export const AuthProvider = ({ children }) => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkingCredentials()); // Establece estado de "checking"

    const unsubscribe = onAuthStateChanged(FirebaseAuth, (user) => {
      if (user) {
        console.log("login");
        const { uid, email, displayName, photoURL } = user;
        dispatch(login({ uid, email, displayName, photoURL }));
      } else {
        console.log("logout");
        dispatch(logout());
      }
    });

    return () => unsubscribe(); // Cleanup para evitar fugas de memoria
  }, []);

  console.log(status);

  if (status === "checking") {
    return <CheckingAuth></CheckingAuth>;
  }

  return <>{children}</>;
};
