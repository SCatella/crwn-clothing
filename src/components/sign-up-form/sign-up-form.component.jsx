import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';

import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    displayName,
    email,
    password,
    confirmPassword
  } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot use create user: email already exists');
      }
      console.log('user creation encountered an error ', error);
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormFields({ ...formFields, [name]: value });
  }


  return (
    <div className='sign-up-page'>
      <h1>sign up with email and password</h1>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='displayname'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        
        <FormInput
          label='email'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        
        <FormInput
          label='password'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='confirm password'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <button type='submit'>sign up</button>
      </form>
      
    </div>
  )
}

export default SignUpForm;