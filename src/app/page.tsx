'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from './context/UserContext';

export default function SignUp() {
  const router = useRouter();
  const { setUser } = useUser();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const validUsername = 'jgomez';
    const validPassword = 'password123';

    if (!formData.username || !formData.password) {
      setError('All fields are required');
      return;
    }

    if (formData.username === validUsername && formData.password === validPassword) {
      setUser({
        name: formData.username,
      });
      router.push('/welcome'); 
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <main className="flex min-h-[calc(100vh-73px)] flex-col items-center justify-center p-8">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-black">Sign Up</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </button>
        </form>
      </div>
    </main>
  );
}