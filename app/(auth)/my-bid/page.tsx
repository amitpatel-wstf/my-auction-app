"use client";
import { AuctionHeader } from "@/components/Auction";
import axios from "axios";
import React, { useEffect, useState } from "react";

type BidsType = {
  artName: string;
  artist: string;
  description: string;
  currentBid: number;
};

const page = () => {
  const [bids, setBids] = useState<BidsType[]>([]);

  async function fetchBids() {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auction/bids/${token}`
    );
    setBids(response.data.bids);
  }
  useEffect(() => {
    fetchBids();
  }, []);

  if (bids.length === 0) {
    return (
      <div>
        <AuctionHeader />
        <p>No bid place yet</p>
      </div>
    );
  }
  return (
    <div>
      <AuctionHeader />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {bids.map((art, index) => (
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
