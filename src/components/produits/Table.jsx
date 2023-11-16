"use client";

import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Link from "next/link";

const Table = ({ data, page }) => {
  const { theme } = useContext(ThemeContext);
  const [users, setUsers] = useState(data);

  const handleDelete = (slug) => {
    const newData = users.filter((item) => item.slug !== slug);
    setUsers(newData);
  };

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
          <td className="border-b pl-4 max-[910px]:hidden">ID</td>
          <td className="border-b pl-4">Produits</td>
          <td className="border-b pl-4 max-[1115px]:hidden">Prix</td>
          <td className="border-b pl-4 max-[486px]:hidden">Stock</td>
          <td className="border-b pl-4 max-[978px]:hidden">Statut</td>
          <td className="border-b pl-4">Action</td>
        </tr>
      </thead>
      <tbody>
        {data.slice((page - 1) * 4, (page - 1) * 4 + 4).map((item) => (
          <tr className="h-14" key={item.id}>
            <td className="border-b pl-4 max-[910px]:hidden">
              {item.id.length > 2 ? item.id.slice(0, 2) + "..." : item.id}
            </td>
            <td className="border-b pl-4 py-4 flex items-center gap-2">
              <img
                src={item.image[0]}
                alt=""
                className="w-10 h-10 object-cover rounded-full max-[357px]:hidden"
              />
              {item.title.length > 10
                ? item.title.slice(0, 10) + "..."
                : item.title}
            </td>
            <td className="border-b pl-4 max-[1115px]:hidden">
              {item.price} €
            </td>
            <td className="border-b pl-4 max-[486px]:hidden">{item.stock}</td>
            <td className="border-b pl-4 max-[978px]:hidden">
              {item.inStock ? (
                <span className="text-green-500">En stock</span>
              ) : (
                <span className="text-red-400">En rupture</span>
              )}
            </td>
            <td className="border-b pl-4">
              <Link href={`/utilisateurs/${item.slug}`}>
                <EditIcon className="text-green-500 mr-10 cursor-pointer" />
              </Link>
              <DeleteOutlineIcon
                className="text-red-400 cursor-pointer"
                onClick={() => handleDelete(item.slug)}
              />
            </td>
          </tr>
        ))}
        <tr className=" h-20"></tr>
      </tbody>
    </table>
  );
};

export default Table;
