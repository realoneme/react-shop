import { useState } from 'react';
import { FormInput } from '../form-input/form-input.component';
import { Button } from '../button/button.componente';
import {
  auth,
  signInWtihEmailPassword,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.style.scss';

const defaultFormFilds = {
  email: '',
  password: '',
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFilds);

  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFilds);
  };
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWtihEmailPassword(email, password);
      console.log(res);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password');
          break;
        case 'auth/user-not-found':
          alert('incorrect email ');
          break;

        default:
          break;
      }

      console.error(error);
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>I have an account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={'Email'}
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label={'Password'}
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={'google'} onClick={logGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};
