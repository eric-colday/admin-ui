"use client";

import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    utilisateurs: 4000,
    commandes: 2400,
    revenus: 2400,
  },
  {
    name: "Fev",
    utilisateurs: 3000,
    commandes: 1398,
    revenus: 2210,
  },
  {
    name: "Mar",
    utilisateurs: 2000,
    commandes: 9800,
    revenus: 2290,
  },
  {
    name: "Avr",
    utilisateurs: 2780,
    commandes: 3908,
    revenus: 2000,
  },
  {
    name: "Mai",
    utilisateurs: 1890,
    commandes: 4800,
    revenus: 2181,
  },
  {
    name: "Jui",
    utilisateurs: 2390,
    commandes: 3800,
    revenus: 2500,
  },
  {
    name: "Juil",
    utilisateurs: 3490,
    commandes: 4300,
    revenus: 2100,
  },
  {
    name: "Août",
    utilisateurs: 4000,
    commandes: 2400,
    revenus: 2400,
  },
  {
    name: "Sep",
    utilisateurs: 3000,
    commandes: 1398,
    revenus: 2210,
  },
  {
    name: "Oct",
    utilisateurs: 2000,
    commandes: 9800,
    revenus: 2290,
  },
  {
    name: "Nov",
    utilisateurs: 2780,
    commandes: 3908,
    revenus: 2000,
  },
  {
    name: "Dec",
    utilisateurs: 1890,
    commandes: 4800,
    revenus: 2181,
  },
];

const Chart = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="mt-10 p-10 max-[470px]:p-0 max-[470px]:text-center  shadow offset-x-0 offset-y-0 blur-15 opacity-75"
      style={
        theme === "dark"
          ? { backgroundColor: "#0f172a", color: "white" }
          : { backgroundColor: "#E6F4FE", color: "black" }
      }
    >
      <h2 className="pb-5 text-2xl max-[470px]:text-xl max-[470px]:pt-5">
        Analyse
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="utilisateurs"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="commandes"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="revenus"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
