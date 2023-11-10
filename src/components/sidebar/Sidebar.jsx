"use client";

import Link from "next/link";
import React, { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArticleIcon from "@mui/icons-material/Article";
import { ThemeContext } from "@/context/ThemeContext";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex-1 h-[calc(100vh-50px)] fixed top-50 z-50 pt-5 max-[425px]:w-20 "
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="p-10 max-[425px]:p-5 text-slate-50">
        <div className="mb-2">
          <h3 className="text-xl max-[425px]:hidden">Tableau de bord</h3>
          <ul className="p-3">
            <Link href="/" className="flex items-center">
              <HomeIcon className="text-xl mr-2 max-[425px]:mb-4" />
              <li className="p-2 cursor-pointer flex items-center rounded-sm max-[425px]:hidden">
                Accueil
              </li>
            </Link>
            <Link href="/utilisateurs" className="flex items-center">
              <PermIdentityIcon className="text-xl mr-2 max-[425px]:mb-4" />
              <li className="p-2 cursor-pointer flex items-center rounded-sm max-[425px]:hidden  ">
                Utilisateurs
              </li>
            </Link>
            <Link href="/produits" className="flex items-center">
              <StorefrontIcon className="text-xl mr-2 max-[425px]:mb-4" />
              <li className="p-2 cursor-pointer flex items-center rounded-sm max-[425px]:hidden">
                Produits
              </li>
            </Link>
            <Link href="/articles" className="flex items-center">
              <ArticleIcon className="text-xl mr-2 max-[425px]:mb-4" />
              <li className="p-2 cursor-pointer flex items-center rounded-sm max-[425px]:hidden">
                Articles
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
