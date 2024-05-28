import React from "react";

const App = () => {
  return (
    // using container and mx-auto will put it in the center
    <div className="container mx-auto border-2 ">
      <div className=" p-10 font-bold underline text-blue-500">hello</div>

      {/* min and max width are good for making responsive sites */}
      <div className="container mx-auto border-2 border-red-900 min-w-1 max-w-[300px]">
        width property
      </div>

      <br />
      {/* this will background color will change based on the screen size */}
      <div className="sm:bg-red-500 md:bg-blue-400 lg:bg-green-500 xl:bg-gray-500 2x:bg-black">
        <h1>will change</h1>
      </div>

      <div>
        <br />
        <div className="sm:bg-green-400 sm:flex">
          <div className="border-2 border-red-500"></div>
          <div className="border-2 border-red-500"></div>
          <div className="border-2 border-red-500"></div>
          <div className="border-2 border-red-500"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
