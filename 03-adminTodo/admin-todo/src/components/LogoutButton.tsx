"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { BiLoaderCircle } from "react-icons/bi";
import { CiLogout } from "react-icons/ci";
import { IoFlashlightOutline } from "react-icons/io5";
import React from "react";

const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <button
        disabled
        className="px-4 py-2 flex items-center gap-2 rounded-md bg-gray-100 text-gray-500 animate-pulse cursor-not-allowed"
      >
        <BiLoaderCircle className="animate-spin" />
        <span>Espere...</span>
      </button>
    );
  }

  if (status === "unauthenticated") {
    return (
      <button
        onClick={() => signIn()}
        className="px-4 py-2 flex items-center gap-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        <IoFlashlightOutline />
        <span>Iniciar sesión</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 py-2 flex items-center gap-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
    >
      <CiLogout />
      <span>Cerrar sesión</span>
    </button>
  );
};

export default LogoutButton;
