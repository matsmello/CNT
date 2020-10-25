import React, { useState } from "react";
import LaddaButton, { XL, EXPAND_RIGHT } from "react-ladda";
import ReactLoading from "react-loading";

import { Header, FormSelect } from "./../../../components";

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
          {
            <FormSelect
              options={[
                "Pista dupla com canteiro central",
                "Pista dupla com barreira central",
                "Pista dupla com faixa central",
                "Pista simples de mão única",
                "Pista simples de mão dupla",
              ]}
              title="Tipo de Rodovia"
            />
          }

          {
            <FormSelect
              options={["Plano", "Ondulado ou Montanhoso"]}
              title="Perfil da Rodovia"
            />
          }

          {
            <FormSelect
              options={[
                "Possui faixa adicional de subida",
                "NÃO possui faixa adicional de subida",
              ]}
              title="Faixa Adicional de Subida"
            />
          }

          {
            <FormSelect
              options={[
                "Possui ponte ou viaduto",
                "NÃO possui ponte ou viaduto",
              ]}
              title="Pontes / Viadutos"
            />
          }

          {
            <FormSelect
              options={[
                "Trecho COM curvas perigosas",
                "Trecho SEM curvas perigosas",
              ]}
              title="Presença de Curvas Perigosas"
            />
          }

          {
            <FormSelect
              options={[
                "COM placas E COM defensas",
                "COM placas E SEM defensas",
                "SEM placas E COM defensas",
                "SEM placas E SEM defensas",
              ]}
              title="Condições das Curvas Perigosas"
            />
          }

          {
            <FormSelect
              options={["COM Acostamento", "SEM Acostamento"]}
              title="Acostamento"
            />
          }
          {
            <FormSelect
              options={[
                "Pavimentado perfeito",
                "NÃO pavimentado perfeito",
                "Más condições",
                "Destruído",
              ]}
              title=" Pavimento do Acostamento"
            />
          }

          <h2 class="text-xl mt-5 font-bold text-center text-gray-800">
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
              class="bg-blue-400 text-white px-3 py-2 mt-5 rounded w-full mt-4 max-w-xs m-auto"
            >
              Submeter
            </button>
          )}
        </div>
      </div>
    </>
  );
}
