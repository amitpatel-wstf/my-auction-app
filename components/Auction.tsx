"use client";
import React from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Arts = [
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
  {
    artName: "Artwork - 02",
    artist: "Raj 2",
    description: "Description of the artwork goes here.",
    currentBid: 700,
  },
];

const Auction = () => {
  const placeBid = async ({
    artName,
    artist,
    description,
    currentBid,
  }: {
    artName: string;
    artist: string;
    description: string;
    currentBid: number;
  }) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/auction/placebid`,
        {
          artName: artName,
          artist: artist,
          description: description,
          currentBid: currentBid,
          token: localStorage.getItem("token"),
        }
      );
      console.log(response);
      if (response.status) {
        alert("Bid placed successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AuctionHeader />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Arts.map((art, index) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={index}
          >
            <a href="#">
              <img className="rounded-t-lg" src="/img-1.jpg" alt="" />
            </a>
            <div className="p-5">
              <div className="text-white">
                <h2>{art.artName}</h2>
                <p>Artist: {art.artist}</p>
                <p>Description: ${art.description}</p>
                <p>Current Bid: ${art.currentBid}</p>
              </div>
              <button
                onClick={() => {
                  placeBid(art);
                }}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Place Bid
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Auction;

export function AuctionHeader() {
  const router = useRouter();
  return (
    <header>
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6 dark:bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <a  className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              User
            </span>
          </a>

          <div
            className=" w-full items-center justify-end order-1 flex w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex font-medium mt-0  lg:space-x-8">
              <Link href="/my-bid">
                <div
                  className={`bg-primary-700 lg:hover:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white `}
                  onClick={() => {}}
                >
                  My Bid
                </div>
              </Link>

              <li>
                <div
                  className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                  onClick={() => {
                    localStorage.removeItem("token");
                    router.push("/");
                  }}
                >
                  LogOut
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
