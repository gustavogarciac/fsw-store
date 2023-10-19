import React from "react";
import { currentUser } from "@clerk/nextjs";

const Home = async () => {
  const user = await currentUser();
  return <div className="text-2xl">{user?.firstName}</div>;
};

export default Home;
