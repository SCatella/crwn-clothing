import { useState } from 'react';
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // eslint-disable-next-line no-unused-vars
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email')
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email')
          break;
        default:
          console.log(error);
      }
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value });
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
    
  }

  return (
    <div className='sign-in-container'>
      <h2>already have an account</h2>
      <span>sign in with your email and password</span>
      <form className='sign-in-form' onSubmit={handleSubmit}>
        <FormInput
            label='email'
            type='text'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
          
          <FormInput
            label='password'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
        />
        <div className='buttons-container' >
          <Button buttonType='' type='submit'>sign in</Button>
          <Button buttonType='google' type='button' onClick={signInWithGoogle} >sign in with google</Button>
        </div>
      </form>  
    </div>
  )
}

export default SignInForm;