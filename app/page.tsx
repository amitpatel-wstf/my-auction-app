"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import InputField from "@/components/form/InputField";

export default function Home() {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form");
    console.log(`Username: ${username}, Password: ${password}`);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/login`,
        {
          username: username,
          password: password,
        }
      );
      console.log("Status:", response);
      if (response.status) {
        console.log("User login successfully");
        localStorage.setItem("token", response.data.token);
        setUserName("");
        setPassword("");
        router.push("/home");
      }
    } catch (error) {
      console.log("error while login");
      alert("Invalid username or password");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <form
        action=""
        className=" flex flex-col gap-4 px-10 p-8 border rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="font-semibold text-xl text-center">Login Form</div>

        <InputField
          value={username}
          setState={setUserName}
          placeholder="Enter your email"
          type="email"
          name="email"
        />
        <InputField
          value={password}
          setState={setPassword}
          placeholder="Enter your Password"
          type="password"
          name="password"
        />
        <button
          type="submit"
          className="border-[2px] border p-2 rounded-sm shadow-sm"
        >
          Login
        </button>
        <Link href="/register">Register</Link>
      </form>
    </div>
  );
}
