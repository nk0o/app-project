이 프로젝트는 [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)으로 부트스트랩된 [Next.js](https://nextjs.org) 프로젝트입니다.

## 시작하기

먼저 개발 서버를 실행하세요:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.tsx` 파일을 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 저장하면 페이지가 자동으로 업데이트됩니다.

이 프로젝트는 [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)를 사용하여 [Geist](https://vercel.com/font) 글꼴(Next.js 제작사 Vercel의 신규 폰트 패밀리)을 자동으로 최적화하고 로드합니다.

## 더 알아보기

Next.js에 대해 더 알아보려면 다음 자료를 참고하세요:

- [Next.js 문서](https://nextjs.org/docs) — Next.js의 기능과 API를 학습하세요.
- [Learn Next.js](https://nextjs.org/learn) — 대화형 Next.js 튜토리얼.

[Next.js GitHub 저장소](https://github.com/vercel/next.js)도 확인해 보세요. 피드백과 기여를 환영합니다!

## Vercel에 배포하기

Next.js 앱을 가장 쉽게 배포하는 방법은 Next.js 제작사가 운영하는 [Vercel 플랫폼](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)을 사용하는 것입니다.

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 확인하세요.

## Firebase 설정

환경변수 파일 `.env.local`을 루트에 생성하고 다음 키를 채워주세요:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

선택(Analytics 사용 시에만):

```bash
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

클라이언트에서 Firebase를 사용할 때는 `src/lib/firebase.ts`의 `getFirebase()`를 불러옵니다.

```ts
import { getFirebase } from '@/lib/firebase';

export default async function Example() {
  const { auth, db } = await getFirebase();
  // ...use auth, db
}
```
