import Login from "~/components/login-page";
import React from "react";
import { type NextPage } from "next";
import Head from "next/head";

const LoginPage: NextPage = () => {
  return (
    <>
      <Head>
        <title> Carter | Log in</title>
      </Head>
      <Login />;
    </>
  );
};

export default LoginPage;
