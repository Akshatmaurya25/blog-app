import React from "react";
import { useState, useEffect } from "react";
export default function Card({ data }) {
  var Likes = Math.floor(Math.random() * 100);
  var Comments = Math.floor(Math.random() * 10);

 

  return (
    <div className="dark:bg-slate-200 w-5/6 max-w-xl mx-auto mt-6 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-3xl font-semibold text-gray-900">{data.title}</h2>
          <div className="text-gray-600 text-sm">{data.date}</div>
        </div>
        <p className="text-gray-800 leading-relaxed">{data.des}</p>
      </div>
      <div className="flex justify-between flex-row items-center">
        <div className="text-gray-400 w-full m-3 flex justify-between items-center">
          <div className="flex">
          <p className="flex items-center justify-center"> <img  className="h-5 w-5 m-2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/768px-Heart_coraz%C3%B3n.svg.png" alt="" />{Likes}</p>
          <p className="flex items-center justify-center"> <img  className="h-5 w-5 m-2" src="https://cdn-icons-png.flaticon.com/512/5338/5338282.png" alt="" />{Comments}</p>

          </div>

          <p className=" text-gray-700 inline align-left">@{data.user}</p>
        </div>
      </div>
    </div>
  );
}
