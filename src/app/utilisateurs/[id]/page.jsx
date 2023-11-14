import React from "react";
import { notFound } from "next/navigation";
import { Users } from "@/data";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";

const getData = (id) => {
  const data = Users.find((user) => user.id === id);

  if (data) {
    return data;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const data = await getData(params.id);
  return {
    title: data.name,
    description: data.desc,
  };
}

const Utilisateur = ({ params }) => {
  const data = getData(params.id);
  console.log(data);

  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-80 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold">
            {data.name}
          </h1>
          <Link href="/utilisateurs">
            <div className="flex justify-end ">
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Utilisateurs
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Utilisateur;
