'use client'

import React from 'react';

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';


export default function ChangePassword() {


    return (
        <div className="min-h-screen">
            <div className=" flex ">
                <div className="mx-auto px-4 my-10 flex-shrink-0 w-full shadow-2xl ">
                    <div className="">
                        <div >
                            <Input
                                label="Old Password"
                                name="old_password"
                                placeholder="Old Password"
                                type="password"
                            />
                            <Input
                                label="New Password"
                                name="new_password"
                                placeholder="New Password"
                                type="password"
                            />
                            <Input
                                label="Repeat New Password"
                                name="repeat_new_password"
                                placeholder="Repeat New Password"
                                type="password"
                            />
                        </div>
                        <div className="form-control mt-4">
                            <Button buttonStyle="primary">Update Password</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
