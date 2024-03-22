## Step 1 Clone Repository
bash
git clone https://github.com/Raj-770/start_hack.git
## Step 2 Add .env.local file to root directory of the project
bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YmFsYW5jZWQtZ2lyYWZmZS04LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_U2nF0lMqh1YRGCcJ8bTsokPepMIIY2GuNVCY6CO32X
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
## Step 3 npm install
bash
npm i
## Step 4 start server
bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
## Step 4 open in browser
Open http://localhost:3000 with your browser to see the result.
