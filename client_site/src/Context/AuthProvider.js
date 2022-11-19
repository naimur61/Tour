import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, updateProfile, signInWithPopup } from 'firebase/auth'
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   // Create User 
   const createUserByEmail = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   }

   // Login User 
   const loginUserByEmail = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   }

   // Update profile 
   const updateUserProfile = (profileDetails) => {
      setLoading(true);
      return updateProfile(auth.currentUser, profileDetails);
   }



   // Sign in with Google & Github    
   const popUpLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   }



   // Set current User 
   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      })
      return unsubscribe;
   }, [])


   // Email verification
   const emailVerified = (currentUser) => {
      setLoading(true);
      return sendEmailVerification(auth.currentUser);
   }

   // Forgot password
   const forgotUserPassword = (email) => {
      setLoading(true);
      return sendPasswordResetEmail(auth, email);
   }




   // Logout User 
   const logoutUser = () => {
      setLoading(true);
      return signOut(auth);
   }



   const authInfo = { user, loading, setUser, createUserByEmail, loginUserByEmail, logoutUser, forgotUserPassword, emailVerified, updateUserProfile, popUpLogin }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;