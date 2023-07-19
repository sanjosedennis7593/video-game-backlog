'use client'

import React, { useState } from 'react';

import Button from '@/app/_components/forms/button';
import Input from '@/app/_components/forms/input';
import RadioButton from '@/app/_components/forms/radio';
import Ratings from '@/app/_components/forms/ratings';
import Select from '@/app/_components/forms/select';

import { PLATFORM_OPTIONS } from '@/config/options';

export default function EditGame() {

    const [gameStatus, setGameStatus] = useState<string | number | undefined>('');

    const handleStatusChange = (value: string | number | undefined) => {
        setGameStatus(value);
    }

    return (
        <div className="min-h-screen">
            <div className=" flex justify-center ">
                <div className="mx-auto px-4 my-10 flex-shrink-0 w-full max-w-5xl shadow-2xl ">
                    <div className="pb-4">
                        <h1 className="text-2xl font-bold">Edit Game</h1>
                        <div className="grid grid-cols-1 gap-1 ">
                            <Input
                                label="Game Title"
                                name="game_title"
                                placeholder="Game Title"
                                type="text"
                            />

                            <Select
                                label="Platform"
                                name="platform"
                                placeholder="Please select a platform"
                                options={PLATFORM_OPTIONS}
                            />

                            <div>
                                <label className="label">
                                    <span className="label-text">Status</span>
                                </label>

                                <div className="grid grid-cols-6 gap-6 ">
                                    <RadioButton
                                        onChange={handleStatusChange}
                                        label="Unfinished"
                                        name="status"
                                        value="unfinished"
                                        checked={gameStatus === 'unfinished'}
                                    />
                                    <RadioButton
                                        onChange={handleStatusChange}
                                        label="Beaten"
                                        name="status"
                                        value="beaten"
                                        checked={gameStatus === 'beaten'}
                                    />
                                    <RadioButton
                                        onChange={handleStatusChange}
                                        label="Completed"
                                        name="status"
                                        value="completed"
                                        checked={gameStatus === 'completed'}
                                    />
                                </div>
                            </div>

                            <Input
                                label="Notes"
                                name="note"
                                placeholder="Write your current progress..."
                                rows={4}
                                type="textarea"
                            />

                            <Input
                                label="IGN (Optional)"
                                name="ign"
                                placeholder="In-game name"
                                type="text"
                            />

                            <Ratings
                                label="Rating"
                                name="rating"
                            />

                        </div>

                        <div className="form-control mt-4 py-4">
                            <Button buttonStyle="primary">Save</Button>
                            <Button buttonStyle="warning">Delete</Button>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}
