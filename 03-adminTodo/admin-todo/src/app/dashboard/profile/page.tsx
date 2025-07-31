"use client";
import { useSession } from "next-auth/react";
import React from "react";

const ProfilePage = () => {
  const { data } = useSession();

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-600 text-lg">Cargando perfil...</p>
      </div>
    );
  }

  const { user, expires } = data;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Perfil del Usuario</h1>
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">ID:</span> {user?.id}</p>
          <p><span className="font-semibold">Nombre:</span> {user?.name}</p>
          <p><span className="font-semibold">Correo:</span> {user?.email}</p>
          <p><span className="font-semibold">Rol:</span> {user?.roles}</p>
          <p><span className="font-semibold">Sesión expira en:</span> {expires}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Datos completos:</h2>
          <div className="bg-gray-100 p-4 rounded overflow-auto max-h-64 text-sm text-gray-600">
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
