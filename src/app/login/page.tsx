'use client';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirebase } from '@/lib/firebase';

export default function Login() {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const { auth } = await getFirebase();
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1 className="text-xl font-bold">로그인</h1>
      <button onClick={handleLogin} className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
        구글 로그인
      </button>
    </div>
  );
}
