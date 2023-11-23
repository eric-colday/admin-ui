import ProduitInfos from '@/components/dashboard/produits/ProduitInfos'
import { Products } from '@/data';
import Link from 'next/link'
import React from 'react'

const getData = (slug) => {
  const data = Products.find((user) => user.slug === slug);

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


const Produit = ({params}) => {
  const data = getData(params.slug);


  return (
    <div>
      <div className="ml-72 pb-16 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
      <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold">
            {data.title}
          </h1>
          <Link href="/dashboard/utilisateurs/creer">
            <div className="flex justify-end ">
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Créer
              </button>
            </div>
          </Link>
        </div>
        <ProduitInfos data={data}/>
      </div>
    </div> 
  )
}

export default Produit
