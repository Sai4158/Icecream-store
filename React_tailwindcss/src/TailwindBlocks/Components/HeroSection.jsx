import React from "react";

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font bg-bgColor">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            50% OFF USE COPOUN - 50OFF
            <br className="hidden lg:inline-block" />
            Home made IceCreams for sale
          </h1>
          <p className="mb-8 leading-relaxed">
            Indulge in the Creamy Delights – Our ice creams are handcrafted with
            passion, using only the finest natural ingredients to ensure each
            scoop is perfectly luscious and uniquely irresistible
          </p>
          <div className="flex justify-center"></div>
        </div>
        <div>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipNIB8-0L8bNSHLv5j5_PDzW0rlgrp_PeVozbN9Z=s1360-w1360-h1020"
            alt="IceCream Pic"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
