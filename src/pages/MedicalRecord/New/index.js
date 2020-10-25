import React, { useState } from "react";
import LaddaButton, { XL, EXPAND_RIGHT } from "react-ladda";
import ReactLoading from "react-loading";

import { Header } from "./../../../components";

export default function New({ history }) {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [files, setFiles] = useState([]);

  const handleSending = () => {
    setSending(true);
    setMessage("Processing data...");

    setTimeout(() => setMessage("Validating data..."), 2000);
    setTimeout(() => setMessage("Sending video..."), 5000);
    setTimeout(() => history.push("/dashboard"), 8000);
  };

  const handleChange = (event) => {
    setFiles([...event.target.files]);
  };

  return (
    <>
      {<Header />}
      <div class="container mx-auto max-w-2xl pt-20">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Nova Ficha
          </h2>
          <div class="flex items-center mb-5 bg-grey-lighter">
            <label class="w-64 flex flex-col items-center px-4 py-2 bg-white text-blue-800 rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-400 hover:text-white">
              <svg
                class="w-6 h-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span class="mt-2 text-base leading-normal">
                Selecionar arquivos
              </span>
              <input
                type="file"
                class="hidden"
                multiple
                onChange={handleChange}
              />
            </label>
          </div>

          {files.length != 0 && (
            <div class="mb-5">
              Arquivos selecionados: {files.map((f) => f.name).join(", ")}
            </div>
          )}
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Tipo de Rodovia
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red text-xs italic">Please fill out this field.</p>
            </div>
            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-full px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-password"
              >
                Password
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
                id="grid-password"
                type="password"
                placeholder="******************"
              />
              <p class="text-grey-dark text-xs italic">
                Make it as long and as crazy as you'd like
              </p>
            </div>
          </div>
          <div class="-mx-3 md:flex mb-2">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-city"
              >
                City
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-city"
                type="text"
                placeholder="Albuquerque"
              />
            </div>
            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded"
                  id="grid-state"
                >
                  <option>New Mexico</option>
                  <option>Missouri</option>
                  <option>Texas</option>
                </select>
                <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                  <svg
                    class="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-zip"
              >
                Zip
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                id="grid-zip"
                type="text"
                placeholder="90210"
              />
            </div>
          </div>
          <h2 class="text-xl mt-10 font-bold text-center text-gray-800">
            {message}
          </h2>
          {sending ? (
            <div class="m-auto flex justify-center">
              <ReactLoading
                type={"bars"}
                color={"black"}
                height={50}
                width={50}
              />
            </div>
          ) : (
            <button
              onClick={handleSending}
              class="bg-blue-400 text-white px-3 py-2 mt-10 rounded w-full mt-4 max-w-xs m-auto"
            >
              Submeter
            </button>
          )}
        </div>
      </div>
    </>
  );
}
