"use client";

import React, { useState } from "react";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Posts } from "@/data";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const getData = (slug) => {
  const data = Posts.find((user) => user.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

const Article = ({ params }) => {
  const data = getData(params.slug);
  const [updateMode, setUpdateMode] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpdate = async () => {
    try {
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async () => {
    try {
      window.location.replace("/blog");
    } catch (err) {}
  };

  return (
    <div>
      <div className="ml-72 pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="">
          <div className="">
            <img
              src={data.image}
              alt={data.title}
              className="w-full h-[200px] object-cover rounded-2xl"
            />
            {updateMode ? (
              <input
                type="text"
                value={title}
                className="w-full p-[50px] text-[28px] max-[]: border-none outline-none bg-transparent text-[var(--textColor)] "
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <div className="py-5 ">
                <h1 className="text-[28px] font-bold flex justify-around items-center text-center max-[610px]:flex-col ">
                  {data.title}
                  {
                    <div className="flex gap-8 ">
                      <span
                        className="text-green-600 "
                        onClick={() => setUpdateMode(true)}
                      >
                        <EditIcon />
                      </span>
                      <span className="text-red-600 " onClick={handleDelete}>
                        <DeleteIcon />
                      </span>
                    </div>
                  }
                </h1>
              </div>
            )}
            <div className="flex justify-between text-yellow-600 py-10 max-[375px]:flex-col max-[375px]:text-center ">
              <span className="">
                Author:
                <Link href="/#" className="link">
                  <b> Éric Colday</b>
                </Link>
              </span>
              <span className="">
                {" "}
                {new Date(data.createdAt).toLocaleDateString("fr-FR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}{" "}
              </span>
            </div>
            {updateMode ? (
              <ReactQuill
                theme="bubble"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, false] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],
                    ["color", "align"],
                    ["link", "image", "video"],
                  ],
                  clipboard: {
                    matchVisual: false,
                  },
                }}
                formats={[
                  "header",
                  "font",
                  "size",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "blockquote",
                  "list",
                  "bullet",
                  "indent",
                  "align",
                  "link",
                  "image",
                  "video",
                ]}
                value={desc || data.content}
                onChange={
                  (setDesc,
                  (content, delta, source, editor) => {
                    setDesc(editor.getHTML());
                  })
                }
                placeholder={data.content}
                className="w-full h-full bg-transparent relative z-[100] "
              />
            ) : (
              <p className="pb-10 ">{data.content} </p>
            )}
            <button
              className="w-24 h-16 px-[10px] py-[20px] border-none bg-blue-950 text-white cursor-pointer rounded-[20px] "
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
        {/* <Sidebar/>  */}
      </div>
      {/* <Comments /> */}
    </div>
  );
};

export default Article;
