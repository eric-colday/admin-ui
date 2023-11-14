import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ placeholder }) => {
  return (
    <form className="w-full flex">
      <input
        type="text"
        placeholder={placeholder}
        className="w-full p-2 outline-none border-2 rounded-l-lg"
      />
      <button
        type="submit"
        className="w-28 bg-blue-950 text-white  cursor-pointer p-2 rounded-r-lg max-[900px]:hidden max-[818px]:block max-[690px]:hidden  max-[552px]:block  max-[386px]:hidden"
      >
        Rechercher
      </button>
      <div className="w-10 bg-blue-950 cursor-pointer p-2 rounded-r-lg hidden max-[900px]:flex max-[900px]:items-center max-[818px]:hidden max-[690px]:flex max-[690px]:items-center  max-[552px]:hidden  max-[386px]:flex max-[386px]:items-center">
        <img
          src="/search.svg"
          alt="Logo de la recherche"
          className="w-5 h-5 text-white"
        />
      </div>
    </form>
  );
};

export default Search;
