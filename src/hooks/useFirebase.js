import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/FireBase/firebase.init";

initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    /* Name Field Funtionality */
    const handleNameChange = e => {
        setName(e.target.value);
    }
    /* Email Field Funtionality */
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    /* Password Field Functionality */
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }

    /* User Registraion Functionality */
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be atleast 6 character');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must be contain 2 Uppercase');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setUserName();
                // window.location.href = '/home';
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    }

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                // window.location.href = '/home';
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    }


    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
            .catch((error) => {
                setError(error.message)
            });
    };

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    };
    const signInUsingFacebook = () => {
        return signInWithPopup(auth, facebookProvider)
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth]);

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            // window.location.reload();
            // window.location.href = '/signin';
        }).catch((error) => {
            setError(error.message)
        });
    }


    return {
        user,
        error,
        setUser,
        setError,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        handleSignIn,
        signInUsingGoogle,
        logOut,
        signInUsingFacebook
    };
};

export default useFirebase;