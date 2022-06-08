import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './sign-in.styles.scss'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
   <div className='sign-in-page'>
      <div className='sign-in-container'>
        <h1>sign in</h1>
        <button className='googleSignInButton' onClick={logGoogleUser} >sign in with google popup</button>
      </div>
      <div>
        <SignUpForm />
      </div>
    </div>
  )
}

export default SignIn;