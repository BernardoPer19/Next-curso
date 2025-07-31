"use client";
import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();

  return (
    <div>
      <span className="text-black">
        {data?.expires} <br />
        {data?.user?.email} <br />
        {data?.user?.name} <br />
        <div>{JSON.stringify({ data })}</div>
      </span>
    </div>
  );
};

export default ProfilePage;
