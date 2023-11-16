import React from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Search from "@/components/search/Search";
import Link from "next/link";
import Table from "@/components/produits/Table";
import Pagination from "@/components/pagination/Pagination";
import { Products } from "@/data";

const getData = () => {
  const data = Products;

  if (data) {
    return data;
  }

  return notFound();
};

export const metadata = {
  title: "Produits - NecAdmin",
  description: "Les produits du tableau de bord NecAdmin",
};

const Produits = ({ searchParams }) => {
  const data = getData();
  const page = searchParams?.page || 1;
  const count = data.length;

  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-20 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl font-bold">Produits</h1>
          <div className="w-full flex gap-6">
            <Search placeholder="Recherche un produit..." />
            <Link href="/produits/creer">
              <div className="flex justify-end ">
                <button className="w-20 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                  Créer
                </button>
              </div>
            </Link>
          </div>
        </div>
        <Table data={data} page={page}/>
        <Pagination count={count}/>
      </div>
    </div>
  );
};

export default Produits;
