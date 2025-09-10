'use client';
import { useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirebase } from '@/lib/firebase';

export default function LoginButton() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsub = () => {};
    (async () => {
      const { auth } = await getFirebase();
      unsub = onAuthStateChanged(auth, (u) => {
        setUser(u);
        setLoading(false);
      });
    })();
    return () => unsub();
  }, []);

  const handleLogin = async () => {
    const { auth } = await getFirebase();
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const handleLogout = async () => {
    const { auth } = await getFirebase();
    await signOut(auth);
  };

  if (loading) {
    return <button className="rounded px-3 py-2 text-sm text-gray-300">로딩...</button>;
  }

  if (!user) {
    return (
      <button
        onClick={handleLogin}
        className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-600"
      >
        로그인
      </button>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <img
        src={user.photoURL ?? undefined}
        alt={user.displayName ?? ''}
        className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
      />
      <button
        onClick={handleLogout}
        className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
      >
        로그아웃
      </button>
    </div>
  );
}
