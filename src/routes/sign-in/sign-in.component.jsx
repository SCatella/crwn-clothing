import { Outlet } from "react-router-dom";
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils'

import './sign-in.styles.scss'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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