import React from "react";
type OnClickHandler = (artName: string, artist: string, description: string, currentBid: number) => void;

const ArtCard = ({artName,artist,description,currentBid,onClick}:{artName:string,artist:string,description:string,currentBid:number,onClick:OnClickHandler}) => {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <a href="#">
        <img className="rounded-t-lg" src="/img-1.jpg" alt="" />
      </a>
      <div className="p-5">
        <div className="text-white">
          <h2>{artName}</h2>
          <p>Artist: {artist}</p>
          <p>Description: ${description}</p>
          <p>Current Bid: ${currentBid}</p>
        </div>
        <button
          onClick={() => {
            onClick(artName, artist, description, currentBid);
          }}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default ArtCard;
