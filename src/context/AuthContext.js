import { useToast } from '@chakra-ui/react';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  const [loadingInitial, setLoadingInitial] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [isToast, setIsToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastTitle, setToastTitle] = useState('');

  let navigate = useNavigate();
  onAuthStateChanged(auth, currentUser => {
    setUser(currentUser);
    setLoadingInitial(false);
  });

  const register = async () => {
    setLoading(true);
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // console.log(user);
      setError('');
      addUser();
      setIsToast(true);
      setToastTitle('Account Created');
      setToastMessage('You have successfully created an account');
      navigate('/');
    } catch (error) {
      //   console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
    console.log('addUser');
    setLoading(true);
    try {
      const docRef = await addDoc(collection(db, 'users'), {
        first: firstName,
        last: lastName,
        email: registerEmail,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    // console.log(loginEmail, loginPassword);
    setLoading(true);
    setError('');
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setError('');
      setIsToast(true);
      setToastTitle('Login Successful');
      navigate('/');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    try {
      await signOut(auth);

      setToastTitle('Logout Successful');
      setIsToast(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
      navigate('/');
    }
  };

  let contextData = {
    registerEmail: registerEmail,
    setRegisterEmail: setRegisterEmail,
    registerPassword: registerPassword,
    setRegisterPassword: setRegisterPassword,
    loginEmail: loginEmail,
    setLoginEmail: setLoginEmail,
    loginPassword: loginPassword,
    setLoginPassword: setLoginPassword,
    user: user,
    loading: loading,
    error: error,
    register: register,
    login: login,
    logout: logout,
    firstName: firstName,
    setFirstName: setFirstName,
    lastName: lastName,
    setLastName: setLastName,
    isToast: isToast,
    toastTitle: toastTitle,
    setToastTitle: setToastTitle,
    toastMessage: toastMessage,
    setToastMessage: setToastMessage,
    setIsToast: setIsToast,
  };
  return (
    <AuthContext.Provider value={contextData}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
