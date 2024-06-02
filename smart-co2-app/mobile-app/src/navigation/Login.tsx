

import {googleProvider } from '../config/firebaseconfig';
import {auth} from '../config/firebaseconfig'
import {createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Avatar } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
const Login = () =>{

    const navigation = useNavigation<any>();
     async function signInWithGoogle (){

        try{
          await signInWithPopup(auth, googleProvider);
            console.log('Signed in with Google', auth.currentUser?.email);
        }
        catch(err){
          console.log(err);
        }
      }
 
    return (
        <>
        <div className="loginPage">
        <p>Sign in with google to continue</p>
        <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign In With Google</button>
        </div>
        </>

    )
}
export  {Login};