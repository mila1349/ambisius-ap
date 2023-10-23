import React from "react";

const Header = () => {
  return (
    <>
      <section className="header bg-gray-10 border-b dark:bg-gray-900 dark:border-opacity-10">
        <div className="container mx-auto ">
        <div className="flex flex-wrap items-center justify-between py-4 mx-auto gap-4">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl flex">
            <span className="block">Ambisius Coding Challenge</span>
            <span className="block">&nbsp;-&nbsp;</span>
            <span className="block text-orange-600">Inne Kamila</span>
          </h2>
        </div>
        </div>
      </section>
    </>
  );
};

export default Header;