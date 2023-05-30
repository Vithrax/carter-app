import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import { type AppType } from "next/app";
import Head from "next/head";

import "@fontsource/public-sans";
import "~/styles/globals.css";

import { api } from "~/utils/api";
import HeroPage from "~/components/hero-page";

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
          <Component {...pageProps} />
        </SignedIn>
        <SignedOut>
          <HeroPage />
        </SignedOut>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
