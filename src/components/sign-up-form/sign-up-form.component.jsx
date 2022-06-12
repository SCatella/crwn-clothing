import { useState, useContext } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { UserContext } from '../../contexts/user.context';

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
  };

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      await createUserDocumentFromAuth(user, { displayName })
      setCurrentUser(user);
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
    <div className='sign-up-container'>
      <h2>i do not have an account</h2>
      <span>sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          label='display name'
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

        <FormInput
          label='confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button buttonType='' type='submit'>sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm;