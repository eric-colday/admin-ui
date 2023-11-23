"use client";

import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import PublishIcon from "@mui/icons-material/Publish";
import { productData } from "@/data";
import Chart from "./Chart";

const ProduitInfos = ({ data }) => {
  const { theme } = useContext(ThemeContext);
  const [files, setFiles] = useState("");

  return (
    <div className="flex gap-4 w-full max-[914px]:flex-col max-[818px]:flex-row max-[630px]:flex-col ">
      {/* DIV 1 */}
      <div
        className="mt-10 p-8 rounded-2xl w-2/3 max-[914px]:w-full max-[818px]:w-2/3 max-[630px]:w-full"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <div className="flex items-center gap-5">
          <img
            src={data.image[0]}
            alt="avatar"
            className="w-10 h-10 object-cover border rounded-full"
          />
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="font-bold">Détails du produit</h2>
          <div className="flex flex-col gap-2">
            <span>id : {data.id}</span>
            <span>Nom : {data.title}</span>
            <span>Ventes : 200</span>
            <span>
              En stock : {data.stock === 0 ? "En rupture" : data.stock}
            </span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="font-bold">Performance de ventes</h2>
          <div className="flex items-center gap-2">
            <Chart data={productData} />
          </div>
        </div>
      </div>
      {/* DIV 2 */}
      <div
        className="mt-10 p-8 rounded-2xl w-full"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <h2 className="text-xl font-bold">Mise à jour</h2>
        <form action="">
          <div className="flex justify-between gap-2 mt-5 max-[443px]:flex-col max-[443px]:gap-10 max-[443px]:items-center">
            <div>
              <div>
                <label htmlFor="" className="text-sm">
                  Nom du produit
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder={data.title}
                  defaultValue={data.title}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Description
                </label>
                <textarea
                  type="text"
                  id="fullrname"
                  name="fullname"
                  placeholder={data.description}
                  defaultValue={data.description}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Prix
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder={data.price}
                  defaultValue={data.price}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Slug
                </label>
                <input
                  type="text"
                  id="slug"
                  name="slug"
                  placeholder={data.slug}
                  defaultValue={data.slug}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  catSlug
                </label>
                <input
                  type="text"
                  id="catSlug"
                  name="catSlug"
                  placeholder={data.catSlug}
                  defaultValue={data.catSlug}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  cat
                </label>
                <input
                  type="text"
                  id="cat"
                  name="cat"
                  placeholder={data.cat}
                  defaultValue={data.cat}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Taille
                </label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  placeholder={data.size}
                  defaultValue={data.size}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder={data.stock}
                  defaultValue={data.stock}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  En stock
                </label>
                <select
                  name="inStock"
                  id="inStock"
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                >
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </select>
              </div>
              <div className="mt-2">
                <label htmlFor="active" className="text-sm">
                  En stock
                </label>
                <select
                  name="active"
                  id="active"
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                >
                  <option value="true">Oui</option>
                  <option value="false">Non</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-72 max-[443px]:gap-5">
              <div className="flex items-center gap-5">
                <img
                  src={data.image[0]}
                  alt={data.title}
                  className="w-28 h-28 border rounded-xl object-cover"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept=".png,.jpeg,.jpg,.webp"
                  multiple
                  style={{ display: "none" }}
                  onChange={(e) => setFiles(e.target.files[0])}
                  required
                />
              </div>
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Mettre à jour
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProduitInfos;
