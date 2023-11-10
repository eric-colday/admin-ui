"use client";

import React, { useContext } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ThemeContext } from "@/context/ThemeContext";

const FeaturedInfo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="w-full flex content-between gap-5 mt-5 my-0 mx-5">
      <div
        className="flex flex-col content-center gap-2 w-full h-36 p-5 rounded-lg shadow offset-x-0 offset-y-0 blur-15 opacity-75"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <span className="text-2xl">Revenus</span>
        <div className="flex items-center gap-3 ">
          <span className="text-3xl font-bold">2000€</span>
          <span className="">
            %2.7
            <ArrowDownwardIcon className="text-red-600 negative" />
          </span>
        </div>
        <span className="text-slate-400">Par rapport au mois dernier</span>
      </div>
      <div
        className="flex flex-col content-center gap-2 w-full h-36 p-5 rounded-lg shadow offset-x-0 offset-y-0 blur-15 opacity-75"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <span className="text-2xl">Ventes</span>
        <div className="flex items-center gap-3 ">
          <span className="text-3xl font-bold">4500€</span>
          <span className="">
            % -2.7
            <ArrowDownwardIcon className="text-red-600 negative" />
          </span>
        </div>
        <span className="text-slate-400">Par rapport au mois dernier</span>
      </div>
      <div
        className="flex flex-col content-center gap-2 w-full h-36 p-5 rounded-lg shadow offset-x-0 offset-y-0 blur-15 opacity-75"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <span className="text-2xl">Revenus</span>
        <div className="flex items-center gap-3 ">
          <span className="text-3xl font-bold">2000€</span>
          <span className="">
            %2.7
            <ArrowDownwardIcon className="text-red-600 negative" />
          </span>
        </div>
        <span className="text-slate-400">Par rapport au mois dernier</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
