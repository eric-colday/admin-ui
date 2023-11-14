"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import ArticleIcon from "@mui/icons-material/Article";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { ThemeContext } from "@/context/ThemeContext";
import ThemeToggle from "../../themeToggle/ThemeToggle";
import Image from "next/image";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div>
      {/* Menu 2 */}
      <div
        className="w-full h-20 border-b fixed top-0 z-50 hidden max-[818px]:block"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="h-full px-8 flex items-center justify-between ">
          <Link href="/">
            <div>
              <h1 className="logo font-bold text-2xl text-blue-500 cursor-pointer">
                NecAdmin
              </h1>
            </div>
          </Link>
          <div className="flex items-center p-3 gap-6">
            {/* Menu 3 */}
            {showLinks ? (
              <div
                className="
                flex flex-col
                fixed top-0 right-0 h-full w-64 z-50
                bg-[#0f172a] shadow-lg
                transition duration-500  ease-in-out
                transform translate-x-0 
                "
              >
                <CloseIcon
                  onClick={handleShowLinks}
                  className="
                  absolute top-3 right-3
                  text-white text-2xl cursor-pointer
                  "
                />
                <div className="flex flex-col p-3 gap-6">
                  <div className="flex items-center gap-5">
                    <img
                      src="/sidebar/veste-esprit-campus3.webp"
                      className="w-16 h-16 object-cover rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-white">Eric Colday</span>
                      <span className="text-white text-sm">Admin</span>
                    </div>
                  </div>
                  <ul className="flex flex-col p-3 gap-6 text-white">
                    <Link href="/" className="flex items-center">
                      <HomeIcon className="text-xl mr-2" />
                      <li className="cursor-pointer flex items-center">
                        Tableau de bord
                      </li>
                    </Link>
                    <Link href="/utilisateurs" className="flex items-center">
                      <PermIdentityIcon className="text-xl mr-2" />
                      <li className="cursor-pointer flex items-center">
                        Utilisateurs
                      </li>
                    </Link>
                    <Link href="/produits" className="flex items-center">
                      <StorefrontIcon className="text-xl mr-2" />
                      <li className="cursor-pointer flex items-center">
                        Produits
                      </li>
                    </Link>
                    <Link href="/articles" className="flex items-center">
                      <ArticleIcon className="text-xl mr-2 " />
                      <li className=" cursor-pointer flex items-center  ">
                        Articles
                      </li>
                    </Link>
                    <Link href="/connexion">
                      <LogoutIcon className="text-3xl cursor-pointer mb-2" />
                    </Link>
                    <ThemeToggle />
                  </ul>
                  <div className="text-sm mt-44 text-center">
                    <span>
                      © Copyright 2023. <br /> All Rights Reserved
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <Image
                src="/burger.svg"
                alt="menu"
                width={30}
                height={30}
                className={showLinks ? "" : "hidden  max-[600px]:block"}
                onClick={handleShowLinks}
                style={{ filter: "invert(1)" }}
              />
            )}
          </div>
          <div className="flex items-center p-3 gap-6 text-white max-[600px]:hidden">
            <Link href="/" className="flex items-center cursor-pointer ">
              <HomeIcon className="text-xl mr-2" />
            </Link>
            <Link
              href="/utilisateurs"
              className="flex items-center cursor-pointer"
            >
              <PermIdentityIcon className="text-xl mr-2" />
            </Link>
            <Link href="/produits" className="flex items-center cursor-pointer">
              <StorefrontIcon className="text-xl mr-2" />
            </Link>
            <Link href="/articles" className="flex items-center cursor-pointer">
              <ArticleIcon className="text-xl mr-2" />
            </Link>
            <ThemeToggle />
            <img
              src="/sidebar/veste-esprit-campus3.webp"
              className="w-12 h-12 object-cover rounded-full"
            />
            <Link href="/connexion">
              <LogoutIcon className="text-3xl cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
      {/* Menu 1 */}
      <div
        className="flex-1 h-[calc(100vh-0px)] fixed top-50 z-50 max-[818px]:hidden"
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className="p-10 text-slate-50 ">
          <Link href="/">
            <h1 className="font-bold text-2xl text-blue-500 cursor-pointer">
              NecAdmin
            </h1>
          </Link>
          <div className="flex flex-col p-3 gap-6">
            <div className="flex items-center gap-5">
              <img
                src="/sidebar/veste-esprit-campus3.webp"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm">Eric Colday</span>
                <span className="text-white text-sm">Admin</span>
              </div>
            </div>
            <ul className="flex flex-col p-3 gap-6">
              <Link href="/" className="flex items-center">
                <HomeIcon className="text-xl mr-2" />
                <li className="cursor-pointer flex items-center">
                  Tableau de bord
                </li>
              </Link>
              <Link href="/utilisateurs" className="flex items-center">
                <PermIdentityIcon className="text-xl mr-2" />
                <li className="cursor-pointer flex items-center  ">
                  Utilisateurs
                </li>
              </Link>
              <Link href="/produits" className="flex items-center">
                <StorefrontIcon className="text-xl mr-2" />
                <li className="cursor-pointer flex items-center">Produits</li>
              </Link>
              <Link href="/articles" className="flex items-center">
                <ArticleIcon className="text-xl mr-2" />
                <li className=" cursor-pointer flex items-center ">Articles</li>
              </Link>
              <Link href="/connexion">
                <LogoutIcon className="text-3xl text-white cursor-pointer mb-2" />
              </Link>
              <ThemeToggle />
            </ul>
          </div>
          <div className="text-sm mt-44">
            <span>
              © Copyright 2023. <br /> All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
