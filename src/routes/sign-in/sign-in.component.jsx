import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

import './sign-in.styles.scss'

const SignIn = () => {

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
   <div className='sign-in-page'>
      <SignInForm logGoogleUser={ logGoogleUser } />
      <SignUpForm />
    </div>
  )
}

export default SignIn;