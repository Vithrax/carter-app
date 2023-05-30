import React from "react";
import { SignIn } from "@clerk/nextjs";
import { Container } from "@mui/joy";

const Login: React.FC = () => {
  return (
    <div className="bg-zinc-100">
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <SignIn />
      </Container>
    </div>
  );
};

export default Login;
