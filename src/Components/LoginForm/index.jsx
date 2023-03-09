import React from 'react'
import EmailButton, { AppleButton, GoogleButton, SignUpButton } from '../Buttons'
import FormInput from '../FormInput'
import OR from '../OR'
import { Form, LoginTitle } from './style'

export default function LoginForm() {
  return (
    <Form>
        <LoginTitle>Log in to Upwork</LoginTitle>
        <FormInput id='email' name='email' placeholder='Username or Email' />
        <EmailButton title ='Continue with Email' />
        <OR text='or' />
        <GoogleButton />
        <AppleButton />
        <OR signUp text='Don`t have an Upwork account?' />
        <SignUpButton />
    </Form>
  )
}
