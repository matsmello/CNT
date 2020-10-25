import React from "react";

export default function New({ history }) {
  return (
    <>
      <div class="h-screen flex overflow-hidden bg-white">
        <div class="md:hidden">
          <div class="fixed inset-0 flex z-40">
            <div class="fixed inset-0">
              <div class="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>

            <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    class="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div class="flex-shrink-0 flex items-center px-4">
                  <img
                    class="h-8 w-auto"
                    src={require("./../../images/logo.jpeg")}
                    alt="Workflow"
                  />
                </div>
                <nav class="mt-5 px-2 space-y-1">
                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-900 rounded-md bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Team
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Projects
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Calendar
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    Documents
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-100 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Relatórios
                  </a>
                </nav>
              </div>
              <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
                <a
                  href="#"
                  class="flex-shrink-0 group block focus:outline-none"
                >
                  <div class="flex items-center">
                    <div>
                      <img
                        class="inline-block h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="ml-3">
                      <p class="text-base leading-6 font-medium text-gray-700 group-hover:text-gray-900">
                        Tom Cook
                      </p>
                      <p class="text-sm leading-5 font-medium text-gray-500 group-hover:text-gray-700 group-focus:underline transition ease-in-out duration-150">
                        View profile
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="flex-shrink-0 w-14"></div>
          </div>
        </div>

        <div class="hidden md:flex md:flex-shrink-0">
          <div class="flex flex-col w-64">
            <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
              <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                  <img
                    class="h-8 w-auto m-auto"
                    src={require("./../../images/logo.jpeg")}
                    alt="Workflow"
                  />
                </div>
                <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-900 rounded-md bg-gray-100 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-500 group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Dashboard
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    Contato
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Envios
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Agenda
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    Documentos Importantes
                  </a>

                  <a
                    href="#"
                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition ease-in-out duration-150"
                  >
                    <svg
                      class="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                    Relatórios
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
          <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
            <button
              class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:bg-gray-200 transition ease-in-out duration-150"
              aria-label="Open sidebar"
            >
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <main
            class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
            tabindex="0"
          >
            <div class="pt-2 pb-6 md:py-6">
              <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 class="text-2xl font-semibold text-gray-900">
                  Bem vindo, Matheus
                </h1>
              </div>
              <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div class="py-4">
                  <div class="rounded-lg h-96">
                    <div class="flex flex-wrap">
                      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-5">
                          <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                              <div class="rounded-full p-5 bg-green-600">
                                <i class="fa fa-wallet fa-2x fa-inverse"></i>
                              </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                              <h5 class="font-bold uppercase text-gray-600">
                                Total percorrido
                              </h5>
                              <h3 class="font-bold text-3xl">
                                18230.3 km{" "}
                                <span class="text-green-500">
                                  <i class="fas fa-caret-up"></i>
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-orange-100 border-b-4 border-orange-500 rounded-lg shadow-lg p-5">
                          <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                              <div class="rounded-full p-5 bg-orange-600">
                                <i class="fas fa-users fa-2x fa-inverse"></i>
                              </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                              <h5 class="font-bold uppercase text-gray-600">
                                Total Paradas
                              </h5>
                              <h3 class="font-bold text-3xl">
                                249{" "}
                                <span class="text-orange-500">
                                  <i class="fas fa-exchange-alt"></i>
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-indigo-100 border-b-4 border-indigo-600 rounded-lg shadow-lg p-5">
                          <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                              <div class="rounded-full p-5 bg-indigo-600">
                                <i class="fas fa-user-plus fa-2x fa-inverse"></i>
                              </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                              <h5 class="font-bold uppercase text-gray-600">
                                Relatórios
                              </h5>
                              <h3 class="font-bold text-3xl">
                                34{" "}
                                <span class="text-yellow-600">
                                  <i class="fas fa-caret-up"></i>
                                </span>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-blue-100 border-b-4 border-blue-500 rounded-lg shadow-lg p-5">
                          <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                              <div class="rounded-full p-5 bg-blue-600">
                                <i class="fas fa-server fa-2x fa-inverse"></i>
                              </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                              <h5 class="font-bold uppercase text-gray-600">
                                Média diária
                              </h5>
                              <h3 class="font-bold text-3xl">600 km</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                        <div class="bg-yellow-100 border-b-4 border-yellow-500 rounded-lg shadow-lg p-5">
                          <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                              <div class="rounded-full p-5 bg-yellow-600">
                                <i class="fas fa-tasks fa-2x fa-inverse"></i>
                              </div>
                            </div>
                            <div class="flex-1 text-right md:text-center">
                              <h5 class="font-bold uppercase text-gray-600">
                                Relatórios pendentes
                              </h5>
                              <h3 class="font-bold text-3xl">3</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 class="text-2xl my-8 text-black-200 font-bold">
                      Nova ficha técnica
                    </h3>
                    <div class="flex m-auto justify-center">
                      <div class="m-3">
                        <button
                          onClick={() => history.push("/new")}
                          class="w-42 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                        >
                          <span class="mx-auto">Submeter novo relatório</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
