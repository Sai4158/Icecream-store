import React from "react";

const Navbar = ({ change }) => {
  return (
    <div>
      <section>
        <header className="text-gray-600 body-font bg-bgColor">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <div
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-10 h-10 text-white p-2 bg-gray-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <img
                  src="https://food.fnr.sndimg.com/content/dam/images/food/products/2021/8/23/rx_the-best-for-sundaes-edys-classic-chocolate-ice-cream.jpeg.rend.hgtvcom.616.616.suffix/1629727617607.jpeg"
                  alt=""
                />
              </div>
              <span className="ml-3 text-xl">Icestore</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center hover:text-red-400 transition-all">
              <a className="mr-5 hover:text-gray-900" href="/">
                Home
              </a>

              <a className="mr-5 hover:text-gray-900" href="/Vanilla">
                Vanila Icecream
              </a>
              <a className="mr-5 hover:text-gray-900">Second Link</a>
              <a className="mr-5 hover:text-gray-900">Third Link</a>
              <a className="mr-5 hover:text-gray-900">Fourth Link</a>
            </nav>
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={change}
            >
              Dark/light mode
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Navbar;
