'use client';
import { useUser } from '../context/UserContext';

export default function Welcome() {
  const { user } = useUser(); 

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-center text-black">Welcome!</h1>
      {user && <p className="text-lg text-gray-700 mt-4">¡Hola, {user.name}! Bienvenido al portal de SkyTech..</p>}
    </main>
  );
}