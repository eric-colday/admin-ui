import Sidebar from "@/components/sidebar/Sidebar";
import Link from "next/link";
import PublishIcon from "@mui/icons-material/Publish";
import React from "react";

export const metadata = {
  title: "Nouvel utilisateur - NecAdmin",
  description: "Pour créer un nouvel utilisateur du tableau de bord NecAdmin",
};

const NouvelUtilisateur = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-72 pb-80 max-[818px]:ml-0 max-[818px]:mt-12 px-10 pt-20">
        <div className="grid grid-cols-2 max-[552px]:grid-cols-0 max-[552px]:flex max-[552px]:flex-col max-[552px]:gap-10 items-center">
          <h1 className="text-3xl  max-[552px]:text-3xl max-[552px]:text-center font-bold">
            Nouvel utilisateur
          </h1>
          <Link href="/utilisateurs">
            <div className="flex justify-end ">
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Utilisateurs
              </button>
            </div>
          </Link>
        </div>
        <div className="mt-10">
          <form className="grid grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-5">
                <img
                  src="/person/noavatar.png"
                  alt="avatar"
                  className="w-40 h-40 rounded-xl"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  // defaultValue={user.img}
                  style={{ display: "none" }}
                  // onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </div>
              <div className="mt-10">
                <label htmlFor="nom" className="text-sm">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Eric"
                  required
                  className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
                  // onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="nom" className="text-sm">
                  Nom et prenom
                </label>
                <input
                  type="text"
                  id="fullname"
                  name="nom"
                  placeholder="Eric Colday"
                  required
                  className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
                  // onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <label htmlFor="nom" className="text-sm">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="eric@gmail.com"
                  required
                  className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
                  // onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NouvelUtilisateur;
