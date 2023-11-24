"use client";

import React, { useState } from "react";
import Image from "next/image";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const NouvelArticle = () => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("upload_preset", "nextjs");
    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/dzqtwmsqg/image/upload",
    //   {
    //     method: "POST",
    //     body: formData,
    //   }
    // );
    // const data = await res.json();
    // setMedia(data.secure_url);
    // const article = {
    //   title,
    //   slug: slugify(title),
    //   content: value,
    //   media,
    //   catSlug,
    // };
    // const res2 = await fetch("http://localhost:1337/articles", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(article),
    // });
    // const data2 = await res2.json();
    // console.log(data2);
  };

  return (
    <div>
      <div className="ml-72 pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt=""
            className="w-full h-[200px] object-cover rounded-2xl"
          />
        )}
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-[50px] text-[28px] max-[]: border-none outline-none bg-transparent text-[var(--textColor)] "
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="mb-12 mr-24 px-[10px] py-[20Px] ml-[50px] outline-none border "
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="style">style</option>
          <option value="fashion">fashion</option>
          <option value="food">food</option>
          <option value="culture">culture</option>
          <option value="travel">travel</option>
          <option value="coding">coding</option>
        </select>
        <button
          className="w-24 h-16 px-[10px] py-[20px] border-none bg-blue-950 text-white cursor-pointer rounded-[20px] "
          onClick={handleSubmit}
        >
          Publier
        </button>
        <div className="flex max-[768px]:flex-col gap-[50px] h-[700px] relative ">
          <button
            className="rounded-full h-10 w-10  bg-transparent border-[1px] border--[var(--textColor)] flex items-center justify-center cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            <Image src="/plus.png" alt="" width={10} height={10} />
          </button>
          {open && (
            <div className="flex gap-[20px] bg-[var(--bg)] absolute z-[999] w-full left-[50px]  ">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className="w-[36px] h-[36px] rounded-full bg-transparent border-[1px] border--[var(--textColor)] border-blue-950 flex items-center justify-center cursor-pointer ">
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
            </div>
          )}
          <ReactQuill
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Redige ton article..."
            className="w-full h-full bg-transparent "
          />
        </div>
      </div>
    </div>
  );
};

export default NouvelArticle;
