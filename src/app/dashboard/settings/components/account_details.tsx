'use client'

import React from 'react';

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';


export default function AccountDetails() {


    return (
        <div className="min-h-screen">
            <div className="flex">
                <div className="mx-auto px-4 my-10 flex-shrink-0 w-full shadow-2xl ">
                    <div className="">
                        <div >
                            <Input
                                label="Email"
                                name="email"
                                placeholder="Email"
                                type="email"
                            />
                            <Input
                                label="Firstname"
                                name="firstname"
                                placeholder="Firstname"
                                type="text"
                            />
                            <Input
                                label="Lastname"
                                name="lastname"
                                placeholder="Lastname"
                                type="text"
                            />
                            <Input
                                label="Birthdate"
                                name="birthdate"
                                placeholder="birthdate"
                                type="date"
                            />
                        </div>
                        <div className="form-control mt-4">
                            <Button buttonStyle="primary">Update Details</Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
