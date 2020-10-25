import "./assets/main.css";
import { Header } from "./components/index";
import React from "react";
function App() {
  return (
    <>
      {<Header />}
      <div
        class="py-20"
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div class="container mx-auto px-6">
          <h2 class="text-4xl font-bold mb-2 text-white">Alice</h2>
          <h3 class="text-2xl mb-8 text-gray-200">
            Monitor your health vitals smartly anywhere you go.
          </h3>
          <button class="bg-red-800 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </div>

      <section class="bg-gray-100">
        <div class="container mx-auto px-6 py-20">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Testimonials
          </h2>
          <div class="flex flex-wrap">
            {[1, 2, 3].map((e) => (
              <div class="w-full md:w-1/3 px-2 mb-4">
                <div class="bg-white rounded shadow py-2">
                  <img src={require("./images/block.png")} class="m-auto" />
                  <p class="text-gray-800 text-base px-6 mb-5">
                    Monitoring and tracking my health vitals anywhere I go and
                    on any platform I use has never been easier.
                  </p>
                  <p class="text-gray-500 text-xs md:text-sm px-6">John Doe</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="bg-gray-200">
        <div class="container mx-auto px-6 p-10">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Features
          </h2>
          <div class="flex items-center flex-wrap mb-20">
            <div class="w-full md:w-1/2">
              <h4 class="text-3xl text-gray-800 font-bold mb-3">
                Exercise Metrics
              </h4>
              <p class="text-gray-600 mb-8">
                Our Smart Health Monitoring Wristwatch is able to capture you
                vitals while you exercise. You can create different category of
                exercises and can track your vitals on the go.
              </p>
            </div>
            <div class="w-full md:w-1/2">
              <img src={require("./images/block.png")} class="m-auto" />
            </div>
          </div>
        </div>
      </section>
      <section class="container mx-auto px-6 p-10">
        <form class="w-full max-w-lg m-auto">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-8">
            Contato
          </h2>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                First Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
              />
              <p class="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div class="w-full md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Last Name
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
              />
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                E-mail
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
              <p class="text-gray-600 text-xs italic">
                Some tips - as long as needed
              </p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Message
              </label>
              <textarea
                class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
              <p class="text-gray-600 text-xs italic">
                Re-size can be disabled by set by resize-none / resize-y /
                resize-x / resize
              </p>
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3">
              <button
                class="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button"
              >
                Send
              </button>
            </div>
            <div class="md:w-2/3"></div>
          </div>
        </form>
      </section>
      <section style={{ backgroundColor: "#667eea" }}>
        <div class="container mx-auto px-6 text-center py-20">
          <h2 class="mb-6 text-4xl font-bold text-center text-white">
            Limited in Stock
          </h2>
          <h3 class="my-4 text-2xl text-white">
            Get yourself the Smart Health Monitoring Wristwatch!
          </h3>
          <button class="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider">
            Pre Order
          </button>
        </div>
      </section>

      <footer class="bg-gray-100">
        <div class="container mx-auto px-6 pt-10 pb-6">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/4 text-center md:text-left ">
              <h5 class="uppercase mb-6 font-bold">Links</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left ">
              <h5 class="uppercase mb-6 font-bold">Legal</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left ">
              <h5 class="uppercase mb-6 font-bold">Social</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/4 text-center md:text-left ">
              <h5 class="uppercase mb-6 font-bold">Company</h5>
              <ul class="mb-4">
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="#"
                    class="hover:underline text-gray-600 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default App;
