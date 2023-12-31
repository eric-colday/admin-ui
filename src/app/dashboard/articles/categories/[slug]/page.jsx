import React from 'react'
import Link from "next/link";
import CatInfos from '@/components/dashboard/articles/CatInfos';
import { CategoriesPosts } from '@/data';

const getData = (slug) => {
  const data = CategoriesPosts.find((user) => user.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

const Categorie = ({ params }) => {
  const data = getData(params.slug);

  return (
    <div className="ml-72 pb-56 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
    <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
      <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold">
        Catégorie : {data.title}
      </h1>
      <Link href="/dashboard/articles/categories">
        <div className="flex justify-end ">
          <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
            Créer
          </button>
        </div>
      </Link>
    </div>
    <CatInfos data={data} />
  </div>
  )
}

export default Categorie
