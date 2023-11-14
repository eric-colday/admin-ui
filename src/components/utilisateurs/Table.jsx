"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";


const Table = ({ data, page }) => {
  const { theme } = useContext(ThemeContext);
  return (
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
              {user.name}
            </td>
            <td className="border-b pl-4 max-[910px]:hidden">{user.email}</td>
            <td className="border-b pl-4 max-[1115px]:hidden">
              {new Date(user.createdAt).toLocaleString("fr-FR") || ""}
            </td>
            <td className="border-b pl-4 max-[421px]:hidden">{user.role}</td>
            <td className="border-b pl-4 max-[978px]:hidden">
              {user.status ? (
                <span className="text-green-500">Actif</span>
              ) : (
                <span className="text-red-400">Inactif</span>
              )}
            </td>
            <td className="border-b pl-4">
              <Link href={`/utilisateurs/${user.id}`}>
                <EditIcon className="text-green-500 mr-10 cursor-pointer" />
              </Link>
              <DeleteOutlineIcon className="text-red-400 cursor-pointer" />
            </td>
          </tr>
        ))}
        <tr className=" h-20"></tr>
      </tbody>
    </table>
  );
};

export default Table;
