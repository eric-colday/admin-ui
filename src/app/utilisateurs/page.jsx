import Search from "@/components/search/Search";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import React from "react";
import Pagination from "@/components/pagination/Pagination";
import { Users } from "@/data";
import Table from "@/components/utilisateurs/Table";

const getData = () => {
  const data = Users;

  if (data) {
    return data;
  }

  return notFound();
};

export const metadata = {
  title: "Utilisateurs - NecAdmin",
  description: "Les utilisateurs du tableau de bord NecAdmin",
};

const Utilisateurs = ({ searchParams }) => {
  const data = getData();
  const page = searchParams?.page || 1;
  const count = data.length;

  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-80 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl font-bold">
            Utilisateurs
          </h1>
          <div className="w-full flex gap-6">
            <Search placeholder="Recherche utilisateur..." />
            <Link href="/utilisateurs/nouvel-utilisateur">
              <div className="flex justify-end ">
                <button className="w-20 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                  Créer
                </button>
              </div>
            </Link>
          </div>
        </div>
        <Table data={data} page={page}/>
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Utilisateurs;
