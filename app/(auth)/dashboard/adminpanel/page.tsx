"use client";
import Auction from "@/components/Auction";
import Header from "@/components/Header";
import UserList from "@/components/UserList";
import { useState } from "react";

const page = async () => {
  const [state, setState] = useState("user");
  return (
    <div>
      <Header state={state} setState={setState} />
      {state === "user" && <UserList />}
      {state === "auction" && <Auction/>}
    </div>
  );
};

export default page;
