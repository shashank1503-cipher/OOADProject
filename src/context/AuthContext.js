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
      console.log(user);
      setError('');
      addUser();
    } catch (error) {
      //   console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async () => {
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
    setLoading(true);
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      setError('');
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    setLoading(true);
    await signOut(auth)
      .catch(err => setError(err))
      .finally(() => {
        setLoading(false);
        navigate('/');
      });
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
  };
  return (
    <AuthContext.Provider value={contextData}>
      {!loadingInitial && children}
    </AuthContext.Provider>
  );
};
