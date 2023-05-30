import { type FC } from "react";
import Typography from "@mui/joy/Typography";

const HeroPage: FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-100">
      <Typography level="h1">
        Your personal shopping list assistance.
      </Typography>
      <Typography level="h5">Shopping made easy</Typography>
    </div>
  );
};

export default HeroPage;
