"use client";

import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import { ThemeContext } from "@/context/ThemeContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";
import React, { useContext } from "react";
import Pagination from "@/components/pagination/Pagination";
import { Users } from "@/data";

const getData = (page) => {
  const data = Users;

  if (data) {
    return data;
  }

  return notFound();
};

const Utilisateurs = ({ searchParams }) => {
  const { theme } = useContext(ThemeContext);
  const data = getData();
  const page = searchParams?.page || 1;
  const count = data.length;

  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-80 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h2 className="text-3xl  max-[552px]:text-3xl font-bold">
            Utilisateurs
          </h2>
          <div className="w-full flex gap-6">
            <Search placeholder="Recherche utilisateur..." />
            <Link href="/nouvel-utilisateur">
              <div className="flex justify-end ">
                <button className="w-20 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                  Créer
                </button>
              </div>
            </Link>
          </div>
        </div>
        <table
          className="mt-14 w-full"
          style={
            theme === "dark"
              ? { backgroundColor: "#0f172a", color: "white" }
              : { backgroundColor: "#E6F4FE", color: "black" }
          }
        >
          <thead>
            <tr className="h-20">
              <td className="border-b pl-4">Nom</td>
              <td className="border-b pl-4 max-[910px]:hidden">E-mail</td>
              <td className="border-b pl-4 max-[1115px]:hidden">Date</td>
              <td className="border-b pl-4 max-[421px]:hidden">Rôle</td>
              <td className="border-b pl-4 max-[978px]:hidden">Statut</td>
              <td className="border-b pl-4">Action</td>
            </tr>
          </thead>
          <tbody>
            {data.slice((page - 1) * 4, (page - 1) * 4 + 4).map((user) => (
              <tr className="h-14" key={user.id}>
                <td className="border-b pl-4 py-4 flex items-center gap-2">
                <img
                src={user.img}
                alt=""
                className="w-10 h-10 object-cover rounded-full max-[357px]:hidden"
                />{" "}
                {user.name}</td>
                <td className="border-b pl-4 max-[910px]:hidden">
                  {user.email}
                </td>
                <td className="border-b pl-4 max-[1115px]:hidden">
                  {new Date(user.createdAt).toLocaleString("fr-FR") || ""}
                </td>
                <td className="border-b pl-4 max-[421px]:hidden">
                  {user.role}
                </td>
                <td className="border-b pl-4 max-[978px]:hidden">
                  {user.status ? (
                    <span className="text-green-500">Actif</span>
                  ) : (
                    <span className="text-red-500">Inactif</span>
                  )}
                </td>
                <td className="border-b pl-4">
                  <EditIcon className="text-green-500 mr-10 cursor-pointer" />
                  <DeleteOutlineIcon className="text-red-500 cursor-pointer" />
                </td>
              </tr>
            ))}
            <tr className=" h-20"></tr>
          </tbody>
        </table>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Utilisateurs;
