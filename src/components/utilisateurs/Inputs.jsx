"use client";

import React, { useState } from "react";
import PublishIcon from "@mui/icons-material/Publish";

const Inputs = () => {
  const [file, setFile] = useState("");

  return (
    <form>
      <div className="flex items-center gap-5">
        <img
          src={file ? URL.createObjectURL(file) : "/person/noavatar.png"}
          alt="avatar"
          className="w-40 h-40 border rounded-xl"
        />
        <label htmlFor="file">
          <PublishIcon className="userUpdateIcon" />
        </label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".png,.jpeg,.jpg,.webp"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
      </div>
      <div className="grid grid-cols-2 max-[425px]:grid-cols-1 gap-6">
        {/* Input 1 */}
        <div>
          <div className="mt-10">
            <label htmlFor="" className="text-sm">
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
            <label htmlFor="fullname" className="text-sm">
              Nom et prenom
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Eric Colday"
              required
              className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
              // onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="eric@gmail.com"
              required
              className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
              // onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              required
              className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
              // onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-sm">
              Téléphone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="+33 6 98 34 20 60"
              required
              className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
              // onChange={handleChange}
            />
          </div>
        </div>
        {/* Input 2 */}
        <div className="mt-5 max-[425px]:mt-0">
          <div className="mt-5 max-[425px]:mt-0">
            <label htmlFor="" className="text-sm">
              Adresse
            </label>
            <input
              type="text"
              id="address"
              placeholder="Paris, France"
              required
              className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
              // onChange={handleChange}
            />
          </div>
          <div className="mt-12 max-[425px]:mt-5">
            <label htmlFor="" className="text-sm">
              Genre
            </label>
            <div className="flex gap-2">
              <input
                type="radio"
                name="gender"
                id="gender"
                value="male"
                required
                // onChange={handleChange}
              />
              <label htmlFor="male">Homme</label>
              <input
                type="radio"
                name="gender"
                id="gender"
                value="female"
                // onChange={handleChange}
              />
              <label htmlFor="female">Femme</label>
            </div>
            <div className="mt-5">
              <label htmlFor="" className="text-sm">
                Active
              </label>
              <select
                name="active"
                id="active"
                className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
                // onChange={handleChange}
              >
                <option value="true">Oui</option>
                <option value="false">Non</option>
              </select>
            </div>
            <div className="mt-5">
              <label htmlFor="role">Rôle</label>
              <select
                name="role"
                id="role"
                className="w-full border outline-none border-gray-300 rounded-xl p-2 mt-2"
                // onChange={handleChange}
              >
                <option value="admin">Admin</option>
                <option value="user">Client</option>
              </select>
            </div>
            <div className="max-[425px]:text-center">
              <button className="mt-14 w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center ">
                Créer
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Inputs;
