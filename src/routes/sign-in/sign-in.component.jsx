import { Outlet } from "react-router-dom";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in.styles.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }
  return (
   <div>
      <div>
        <h1>sign in</h1>
        <button className='googleSignInButton' onClick={logGoogleUser} >sign in with google popup</button>
      </div>
      <Outlet />
    </div>
  )
}

export default SignIn;