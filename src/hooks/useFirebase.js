import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, FacebookAuthProvider, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/FireBase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
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
            })
            .finally(() => setIsLoading(false))
            .catch(error => {
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
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };
    const signInUsingFacebook = () => {
        const facebookProvider = new FacebookAuthProvider();
        return signInWithPopup(auth, facebookProvider)
            .finally(() => setIsLoading(false))
    };

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
                // window.location.reload();
                // window.location.href = '/signin';
            }).finally(() => setIsLoading(false))
    }
    //observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [auth]);


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
        signInUsingFacebook,
        isLoading
    };
};

export default useFirebase;