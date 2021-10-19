import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/FireBase/firebase.init";

initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    /* STATE DECLARE */
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);


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
                window.location.reload();
                setUserName();
                setError('');
            }).catch(error => {
                setError(error.message);
            });
    };
    /* User SignIn Funtionality */
    const handleSignIn = () => {
        return signInWithEmailAndPassword(auth, email, password)
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            });
    }

    /* Registraion Set User Name Funtionality */
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => { })
            .catch((error) => {
                setError(error.message)
            });
    };
    /* User Google Sign In Funtionality */
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
            .finally(() => setIsLoading(false))
    };
    /* User Log Out Funtionality */
    const logOut = () => {
        setIsLoading(true);
        return signOut(auth)
            .finally(() => setIsLoading(false))
    }
    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
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
        isLoading
    };
};

export default useFirebase;