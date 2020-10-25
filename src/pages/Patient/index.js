import React from "react";

import { Header } from "./../../components";

export default function New() {
  return (
    <>
      {<Header />}
      <div class="container mx-auto max-w-2xl pt-20">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Nome completo do paciente
          </h2>
          <h2 class="text-2xl mt-10 font-bold text-gray-800 mb-8">Fichas</h2>

          <div class="container my-12 mx-auto">
            <div class="flex flex-wrap -mx-1 lg:-mx-4">
              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="https://picsum.photos/600/400/?random"
                    />
                  </a>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Article Title
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">14/4/19</p>
                  </header>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                      class="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      <img
                        alt="Placeholder"
                        class="block rounded-full"
                        src="https://picsum.photos/32/32/?random"
                      />
                      <p class="ml-2 text-sm">Author Name</p>
                    </a>
                    <a
                      class="no-underline text-grey-darker hover:text-red-dark"
                      href="#"
                    >
                      <span class="hidden">Like</span>
                      <i class="fa fa-heart"></i>
                    </a>
                  </footer>
                </article>
              </div>

              <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img
                      alt="Placeholder"
                      class="block h-auto w-full"
                      src="https://picsum.photos/600/400/?random"
                    />
                  </a>

                  <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                      <a
                        class="no-underline hover:underline text-black"
                        href="#"
                      >
                        Article Title
                      </a>
                    </h1>
                    <p class="text-grey-darker text-sm">14/4/19</p>
                  </header>

                  <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a
                      class="flex items-center no-underline hover:underline text-black"
                      href="#"
                    >
                      <img
                        alt="Placeholder"
                        class="block rounded-full"
                        src="https://picsum.photos/32/32/?random"
                      />
                      <p class="ml-2 text-sm">Author Name</p>
                    </a>
                    <a
                      class="no-underline text-grey-darker hover:text-red-dark"
                      href="#"
                    >
                      <span class="hidden">Like</span>
                      <i class="fa fa-heart"></i>
                    </a>
                  </footer>
                </article>
              </div>
            </div>
          </div>
          <h2 class="text-2xl mt-10 font-bold text-gray-800 mb-8">Pessoal</h2>

          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
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

          <h2 class="text-2xl mt-10 font-bold text-gray-800 mb-8">Endereço</h2>
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
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
          <button class="bg-blue-400 text-white px-3 py-2 mt-10 rounded w-full mt-4 max-w-xs m-auto">
            Criar
          </button>
        </div>
      </div>
    </>
  );
}
