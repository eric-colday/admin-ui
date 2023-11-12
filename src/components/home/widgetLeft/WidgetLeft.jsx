"use client";

import { ThemeContext } from "@/context/ThemeContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import React, { useContext } from "react";

const WidgetLeft = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col content-center gap-4 w-2/4 max-[1339px]:w-full h-96 px-10 max-[430px]:px-4 pt-12 max-[430px]:pl-12 shadow offset-x-0 offset-y-0 blur-15 opacity-75"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a", color: "white" }
          : { backgroundColor: "#E6F4FE", color: "black" }
      }
    >
      <h2 className="text-2xl max-[425px]:text-xl">Nouveaux membres</h2>
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-3 max-[375px]:grid-cols-2 items-center ">
          <img
            src="/sidebar/veste-esprit-campus3.webp"
            alt="veste-esprit-campus3"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="max-[375px]:hidden">Eric Colday</span>
          <Link href="/">
            <button className="flex justify-center items-center gap-2 bg-white rounded-2xl w-20 h-8 text-slate-900">
              <VisibilityIcon className="widgetSmIcon" />
              Voir
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-[375px]:grid-cols-2 items-center">
          <img
            src="/sidebar/veste-esprit-campus3.webp"
            alt="veste-esprit-campus3"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="max-[375px]:hidden">Deborah Jane</span>
          <Link href="/">
            <button className="flex justify-center items-center gap-2 bg-white rounded-2xl w-20 h-8 text-slate-900">
              <VisibilityIcon className="widgetSmIcon" />
              Voir
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-[375px]:grid-cols-2 items-center">
          <img
            src="/sidebar/veste-esprit-campus3.webp"
            alt="veste-esprit-campus3"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span  className="max-[375px]:hidden">Jon Doe</span>
          <Link href="/">
            <button className="flex justify-center items-center gap-2 bg-white rounded-2xl w-20 h-8 text-slate-900">
              <VisibilityIcon className="widgetSmIcon" />
              Voir
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-3 max-[375px]:grid-cols-2 items-center">
          <img
            src="/sidebar/veste-esprit-campus3.webp"
            alt="veste-esprit-campus3"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="max-[375px]:hidden">Mae Monk</span>
          <Link href="/">
            <button className="flex justify-center items-center gap-2 bg-white rounded-2xl w-20 h-8 text-slate-900">
              <VisibilityIcon className="widgetSmIcon" />
              Voir
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WidgetLeft;
