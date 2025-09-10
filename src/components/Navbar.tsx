import Link from 'next/link';
import LoginButton from './LoginButton';

export default function Navbar() {
  return (
    <nav className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <Link href="/">
            <h1 className="flex flex-1 items-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <img
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                  className="h-8 w-auto"
                />
              </div>
            </h1>
          </Link>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <LoginButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

// export default function Navbar() {
//   return (
//     <nav style={{ display: "flex", gap: 12, padding: 12 }}>
//       <Link href="/">홈</Link>
//       <Link href="/report">리포트</Link>
//       <Link href="/login">로그인</Link>
//     </nav>
//   );
// }
