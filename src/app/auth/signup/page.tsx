'use client'

import Link from 'next/link';

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';

export default function SignUp() {

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Create an account</h1>
            <div className="grid grid-cols-2 gap-2 ">
              <div>
                <Input
                  label="Email"
                  name="email"
                  placeholder="email"
                  type="email"
                />
                <Input
                  label="Password"
                  name="password"
                  placeholder="password"
                  type="password"
                />
                <Input
                  label="Repeat Password"
                  name="repeat_password"
                  placeholder="password"
                  type="password"
                />
              </div>
              <div>
                <Input
                  label="Firstname"
                  name="text"
                  placeholder="firstname"
                  type="text"
                />

                <Input
                  label="Lastname"
                  name="text"
                  placeholder="lastname"
                  type="text"
                />

                <Input
                  label="Birthdate"
                  name="birthdate"
                  placeholder="birthdate"
                  type="date"
                />
              </div>
            </div>




            <div className="form-control mt-4">
              <Button buttonStyle="primary">Sign Up</Button>
            </div>


            <label className="label">
              <Link href="/auth/signin" className="text-lg label-text-alt link link-hover">Back to login</Link>
            </label>


          </div>
        </div>

      </div>
    </div>
  )
}
