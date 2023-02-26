import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {
  // useEffect(() => {
  //   (async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = createUserDocumentFromAuth(response.user);
  //     }
  //   })();
  // }, []);
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  // const logGoogleUserRedirect = async () => {
  //   const { user } = await signInWithGoogleRedirect();

  //   // const userDocRef = createUserDocumentFromAuth(user);
  // };

  return (
    <>
      <div>signin</div>
      <button onClick={logGoogleUser}>sign in with google</button>
      <SignUpForm />
      {/* <br></br>
      <button onClick={logGoogleUserRedirect}>
        sign in with google Redirect
      </button> */}
    </>
  );
};

export default SignIn;
