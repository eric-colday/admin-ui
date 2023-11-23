"use client";

import React from "react";
import ReactQuill from "react-quill";

const Article = () => {
  return (
    <div>
      <div className="ml-72 pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <img
          src="/home/dashboard.webp"
          alt=""
          className="w-full h-[200px] object-cover rounded-2xl"
        />
        <input
          type="text"
          placeholder="Title"
          className="
            w-full
            h-10
            rounded-2xl
            border
            border-gray-300
            outline-none
            px-4
            mt-4
            text-lg
            font-bold
            text-gray-700
          "
          // onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className=""
          // onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <div>
          <ReactQuill
            className=""
            theme="bubble"
            // value={value}
            // onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
