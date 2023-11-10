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
      className="flex-1 h-[calc(100vh-50px)] sticky top-50 pt-5"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="p-10 text-slate-50">
        <div className="mb-2">
          <h3 className="text-xl">Tableau de bord</h3>
          <ul className="p-3">
            <Link href="/" className="link">
              <li className="p-2 cursor-pointer flex items-center rounded-sm">
                <HomeIcon className="text-xl mr-2" />
                Accueil
              </li>
            </Link>
            <Link href="/utilisateurs" className="link">
              <li className="p-2 cursor-pointer flex items-center rounded-sm">
                <PermIdentityIcon className="text-xl mr-2" />
                Utilisateurs
              </li>
            </Link>
            <Link href="/produits" className="link">
              <li className="p-2 cursor-pointer flex items-center rounded-sm">
                <StorefrontIcon className="text-xl mr-2" />
                Produits
              </li>
            </Link>
            <Link href="/articles" className="link">
              <li className="p-2 cursor-pointer flex items-center rounded-sm">
                <ArticleIcon className="text-xl mr-2" />
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
