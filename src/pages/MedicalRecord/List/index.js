import React from "react";
import { Header } from "./../../../components";
export default function List() {
  return (
    <>
      {<Header />}
      <div class="container mx-auto max-w-2xl pt-20">
        <input
          class="w-full h-16 px-3 rounded focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div class="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
        <div class="overflow-hidden bg-white rounded max-w-2xl w-full shadow-lg  leading-normal flex-1">
          {[1, 2, 3, 4].map((e) => (
            <a
              href="#"
              class="block group hover:bg-blue p-4 border-b max-w-2xl min-w-full pb-5"
            >
              <p class="font-bold text-lg mb-1 text-black group-hover:text-white">
                Create from scratch
              </p>
              <div class="flex m-auto">
                <p class="text-grey-darker mb-2 group-hover:text-white">
                  Create a repository without without any source code
                </p>
                <img
                  class="w-8 h-8 flex-auto"
                  src={require("./../../../images/star_in.svg")}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
