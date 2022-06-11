import FormInput from '../form-input/form-input.component';

import './sign-in-form.styles.scss';

const SignInForm = (logGoogleUser) => {
  return (
    <div className='sign-in-container'>
      <h1>sign in</h1>
      {/*<FormInput
          label='email'
          type='text'
          required
          onChange={handleChange}
          name='email'
          value={displayName}
        />
        
        <FormInput
          label='password'
          type='text'
          required
          onChange={handleChange}
          name='password'
          value={displayName}
        />*/}
      <button className='googleSignInButton' onClick={logGoogleUser} >sign in with google popup</button>
    </div>
  )
}

export default SignInForm;