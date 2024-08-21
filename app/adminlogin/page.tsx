"use client"
import InputField from "@/components/form/InputField";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [token, setToken] = useState("");
  const router = useRouter()

  async function handleSubmit(e:React.FormEvent){
    e.preventDefault();
    try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin`,{
            token:token
        })
        console.log(response)
        if(response.status){
            localStorage.setItem('token',token)
            router.push("/dashboard/adminpanel")
        }
    } catch (error) {
        alert("Token is incorrect...!")
    }
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form
        action=""
        className=" flex flex-col gap-4 px-10 p-8 border rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="font-semibold text-xl text-center">Admin Login</div>
        <InputField
          value={token}
          setState={setToken}
          placeholder="Enter admin token"
          type="text"
          name="token"
        />
        
        <button
          type="submit"
          className="border-[2px] border p-2 rounded-sm shadow-sm"
        >
          login 
        </button>
        <Link href="/">login as User</Link>
      </form>
    </div>
  );
};

export default page;
