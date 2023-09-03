'use client'
import { ChangeEvent, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation'

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';

import { signIn } from '@/services/auth';

export default function SignIn() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const response = await signIn(email, password);
      if (response?.result) {
        router.push('/dashboard')
      }

    } catch (err) { 
      console.log('response err',err)
    }
    finally {
      setIsLoading(false)
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'password') {
      setPassword(e.target.value)
    }
  };



  return (
    <div className="min-h-screen mx-auto bg-base-200">
      <div className="flex-col p-5 lg:flex-row-reverse ">
        <div className="card mt-12 mx-auto flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <div className="card-body">
            <Input
              onChange={handleInputChange}
              name="email"
              label="Email"
              placeholder="email"
              type="email"
            />
            <Input
              onChange={handleInputChange}
              label="Password"
              name="password"
              placeholder="password"
              type="password"
            />

            <label className="label">
              <Link href="#" className="text-lg label-text-alt link link-hover">Forgot password?</Link>
            </label>
            <div className="form-control mt-4">
              <Button disabled={isLoading} type="button" onClick={handleSubmit} buttonStyle="primary">{isLoading ? 'Please  Wait...' : 'Sign In'}</Button>
            </div>

            <label className="label">
              <Link href="/auth/signup" className="text-lg label-text-alt link link-hover">Don't have an account? Sign up</Link>
            </label>
          </div>
        </div>

      </div>
    </div>
  )
}
