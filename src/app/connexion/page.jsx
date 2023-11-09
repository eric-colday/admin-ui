"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import styles from "./connexion.module.css";

const Connexion = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setError(params.get("error"));
    setSuccess(params.get("success"));
  }, [params]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", {
      email,
      password,
    });
  };
  return (
    <div className="flex items-center flex-col gap-4 pt-20 pb-40">
      <h2 className="text-center text-4xl sm:text-5xl font-bold">{success ? success : "Se connecter"}</h2>
      <h3 className="text-sm sm:text-xl">S'il vous plaît connectez-vous pour la suite</h3>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Email"
          required
          className="p-6 bg-transparent border-2 border-gray-400 rounded-md outline-none text-zinc-500 text-xl font-bold"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          required
          className="p-6 bg-transparent border-2 border-gray-400 rounded-md outline-none text-zinc-500 text-xl font-bold"
        />
        <button className="w-74 p-5 cursor-pointer bg-sky-950  border-none rounded-md text-slate-200 font-bold hover:bg-sky-900">Se connecter</button>
        {error && error}
      </form>
      <button
        onClick={() => {
          signIn("google");
        }}
        className={styles.button + " " + styles.google}
      >
        Se connecter avec Google
      </button>
    </div>
  );
};

export default Connexion;
