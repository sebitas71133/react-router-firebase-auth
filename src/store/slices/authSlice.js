import { createSlice } from "@reduxjs/toolkit";
import {
  logoutFirebase,
  registerWithEmailPassword,
  signInWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";

export const checkingAuthenticaction = () => {
  return async (dispatch) => {
    dispatch(setIsloading(true));
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (result.ok) {
      dispatch(login(result));
    } else {
      dispatch(logout({ errorMessage: result.errorMessage }));
      console.log({ result });
    }
    dispatch(setIsloading(false));
  };
};

export const createUserWithEmailPasswordThunk = ({
  email,
  password,
  name: displayName,
}) => {
  return async (dispatch) => {
    dispatch(setIsloading(true));
    dispatch(checkingCredentials());

    const result = await registerWithEmailPassword({
      email,
      password,
      displayName,
    });
    if (result.ok) {
      dispatch(login(result));
    } else {
      dispatch(logout({ errorMessage: result.errorMessage }));
      console.log({ result });
    }
    dispatch(setIsloading(false));
  };
};

export const signInWithEmailPassowrdThunk = ({ email, password }) => {
  return async (dispatch) => {
    dispatch(setIsloading(true));
    dispatch(checkingCredentials());

    const result = await signInWithEmailPassword({ email, password });
    if (result.ok) {
      dispatch(login(result));
      console.log({ result });
    } else {
      dispatch(logout({ errorMessage: result.errorMessage }));
      console.log({ result });
    }
    dispatch(setIsloading(false));
  };
};

export const logoutFirebaseThunk = () => {
  return async (dispatch) => {
    await logoutFirebase();
  };
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displayName: null || "Anónimo",
    photoUrl: null,
    errorMessage: null,
    isLoading: false,
  },
  reducers: {
    login: (state, action) => {
      state.status = "authenticated";
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
      state.errorMessage = null;
    },
    logout: (state, action) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
      state.errorMessage = action.payload?.errorMessage;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { checkingCredentials, login, logout, setIsloading } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
