"use client"
import { Edit_Form } from '@/Component/Edit';
import { authClient } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import React from 'react';

const ProfilePage = () => {
    const user_data = authClient.useSession()
    const user = user_data.data?.user
    console.log(user)
    return (
        <div>

            <div className="max-w-sm mx-auto rounded-2xl my-5 shadow-lg border p-6 bg-white">

                {/* Profile Image */}
                <div className="flex justify-center">
                    <Avatar>
                        <Avatar.Image alt={user?.name[0]} src={user?.image} />
                        <Avatar.Fallback>JD</Avatar.Fallback>
                    </Avatar>
                    {/* <img
      src={user?.image"}
      alt={user?.name}
      className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
    /> */}
                </div>

                {/* User Info */}
                <div className="text-center mt-4">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {user?.name}
                    </h2>

                    <p className="text-gray-500 mt-1">
                        {user?.email}
                    </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <Edit_Form></Edit_Form>
                </div>

            </div>
        </div>
    );
};

export default ProfilePage;