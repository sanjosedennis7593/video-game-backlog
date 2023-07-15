'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation'

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';

export default function SignIn() {
  const router= useRouter()

  const handleSubmit = () => {

    router.push('/dashboard')
  };


  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <div className="card-body">
            <Input
              label="Email"
              placeholder="email"
              type="email"
            />
            <Input
              label="Password"
              placeholder="password"
              type="password"
            />

            <label className="label">
              <Link href="#" className="text-lg label-text-alt link link-hover">Forgot password?</Link>
            </label>
            <div className="form-control mt-4">
              <Button type="button" onClick={handleSubmit} buttonStyle="primary">Sign In</Button>
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
