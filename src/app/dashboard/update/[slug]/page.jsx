"use client";

import React, { useState } from "react";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Posts } from "@/data";

const getData = (slug) => {
  const data = Posts.find((user) => user.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

const Article = ({params}) => {
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
              className=""
            />
            {updateMode ? (
              <input
                type="text"
                value={title}
                className=""
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <div className="">
                <h1 className="">
                  {data.title}
                  {
                    <div className="">
                      <span
                        className=""
                        onClick={() => setUpdateMode(true)}
                      >
                        <EditIcon />
                      </span>
                      <span
                        className=""
                        onClick={handleDelete}
                      >
                        <DeleteIcon />
                      </span>
                    </div>
                  }
                </h1>
              </div>
            )}
            <div className="">
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
              <textarea
                className=""
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            ) : (
              <p className="">{data.content} </p>
            )}
            <button className="" onClick={handleUpdate}>
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
