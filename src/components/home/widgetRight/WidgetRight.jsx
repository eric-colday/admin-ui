"use client";

import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import React, { useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetRight = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col content-center gap-4 w-full h-96 px-10 max-[425px]:px-5 pt-12 max-[430px]:pl-20 shadow offset-x-0 offset-y-0 blur-15 opacity-75"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a", color: "white" }
          : { backgroundColor: "#E6F4FE", color: "black" }
      }
    >
      <h2 className="text-2xl max-[425px]:text-xl">Dernières transactions</h2>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 items-center gap-16 max-[973px]:gap-0 max-[540px]:grid-cols-3">
          <span>Client ID</span>
          <span className="max-[540px]:hidden">Date</span>
          <span>Montant</span>
          <span>Statut</span>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="grid grid-cols-4 items-center gap-16 max-[973px]:gap-0 text-sm max-[540px]:grid-cols-3">
            <span>6242b0d..</span>
            <span className="max-[540px]:hidden">Depuis 1 mois</span>
            <span>100 €</span>
            <div className="bg-red-400  rounded-2xl text-center">
              <span>En attente</span>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-16 max-[973px]:gap-0 text-sm max-[540px]:grid-cols-3">
            <span>6242b0d..</span>
            <span className="max-[540px]:hidden">Depuis 5 mois</span>
            <span>50 €</span>
            <div className="bg-lime-500  rounded-2xl text-center">
              <span>Terminé</span>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-16 max-[973px]:gap-0 text-sm max-[540px]:grid-cols-3">
            <span>6242b0d..</span>
            <span className="max-[540px]:hidden">Depuis 2 mois</span>
            <span>30 €</span>
            <div className="bg-red-400  rounded-2xl text-center">
              <span>En attente</span>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-16 max-[973px]:gap-0 text-sm max-[540px]:grid-cols-3">
            <span>6242b0d..</span>
            <span className="max-[540px]:hidden">Depuis 5 mois</span>
            <span>50 €</span>
            <div className="bg-lime-500  rounded-2xl text-center">
              <span>Terminé</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WidgetRight;
