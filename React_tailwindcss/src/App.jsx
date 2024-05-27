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
    </div>
  );
};

export default App;
