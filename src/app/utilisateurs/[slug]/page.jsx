import React from "react";
import { notFound } from "next/navigation";
import { Users } from "@/data";
import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import UserInfos from "@/components/utilisateurs/UserInfos";
import Footer from "@/components/footer/Footer";

const getData = (slug) => {
  const data = Users.find((user) => user.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

export async function generateMetadata({ params }) {
  const data = await getData(params.slug);
  return {
    title: data.name,
    description: data.desc,
  };
}

const Utilisateur = ({ params }) => {
  const data = getData(params.slug);

  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold">
            {data.name}
          </h1>
          <Link href="/utilisateurs/creer">
            <div className="flex justify-end ">
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Créer
              </button>
            </div>
          </Link>
        </div>
        <UserInfos data={data}/>
        <Footer />
      </div>
    </div>
  );
};

export default Utilisateur;
