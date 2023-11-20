"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import PublishIcon from "@mui/icons-material/Publish";

const UserInfos = ({ data }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex gap-4 w-full max-[914px]:flex-col max-[818px]:flex-row max-[630px]:flex-col ">
      {/* DIV 1 */}
      <div
        className="mt-10 p-8 rounded-2xl w-2/3 max-[914px]:w-full max-[818px]:w-2/3 max-[630px]:w-full"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <div className="flex items-center gap-5">
          <img
            src={data.img}
            alt="avatar"
            className="w-10 h-10 object-cover border rounded-full"
          />
          <span>{data.name}</span>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="font-bold">Détails du compte</h2>
          <div className="flex items-center gap-2">
            <PersonIcon />
            <span>{data.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarTodayIcon />
            <span>10.12.1999</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          <h2 className="font-bold">Détails du contact</h2>
          <div className="flex items-center gap-2">
            <PhoneAndroidIcon />
            <span>{data.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <MailOutlineIcon />
            <span>10.12.1999</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationSearchingIcon />
            <span>10.12.1999</span>
          </div>
        </div>
      </div>
      {/* DIV 2 */}
      <div
        className="mt-10 p-8 rounded-2xl w-full"
        style={
          theme === "dark"
            ? { backgroundColor: "#0f172a", color: "white" }
            : { backgroundColor: "#E6F4FE", color: "black" }
        }
      >
        <h2 className="text-xl font-bold">Mise à jour</h2>
        <form action="">
          <div className="flex justify-between gap-2 mt-5 max-[443px]:flex-col max-[443px]:gap-10 max-[443px]:items-center">
            <div>
              <div>
                <label htmlFor="" className="text-sm">
                  Nom d'utilisateur
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder={data.name}
                  defaultValue={data.name}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Nom et prenom
                </label>
                <input
                  type="text"
                  id="fullrname"
                  name="fullname"
                  placeholder={data.name}
                  defaultValue={data.name}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder={data.email}
                  defaultValue={data.email}
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Téléphone
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="3737676363"
                  defaultValue=""
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Paris, France"
                  defaultValue=""
                  required
                  className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                />
              </div>
              <div className="mt-2">
                <label htmlFor="" className="text-sm">
                    Rôle
                </label>
                <select
                    name="role"
                    id="role"
                    className="w-full border outline-none border-gray-300 text-sky-950 rounded-xl p-1 mt-2"
                >
                    <option value="admin">Admin</option>
                    <option value="user">Client</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-72 max-[443px]:gap-5">
              <div className="flex items-center gap-5">
                <img
                  src={data.img}
                  alt="avatar"
                  className="w-28 h-28 border rounded-xl object-cover"
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
              <button className="w-32 bg-blue-950 text-white cursor-pointer p-2 rounded-2xl text-center">
                Mettre à jour
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserInfos;
