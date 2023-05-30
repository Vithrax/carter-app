import { type AppType } from "next/app";
import Head from "next/head";
import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import "@fontsource/public-sans";

import { api } from "~/utils/api";
import "~/styles/globals.css";

import LoginPage from "~/components/login-page";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Carter</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <ClerkProvider>
        <SignedIn>
          <UserButton />
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <LoginPage />
        </SignedOut>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
