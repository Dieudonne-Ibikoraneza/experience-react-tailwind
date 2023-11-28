import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJlYWNofGVufDB8fDB8fHww"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGJlYWNofGVufDB8fDB8fHww"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYWNofGVufDB8fDB8fHww"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-3"
          src="https://images.unsplash.com/photo-1534570122623-99e8378a9aa7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYWNofGVufDB8fDB8fHww"
          alt="/"
        />
        <img
          className="object-cover w-full h-full p-2 row-span-2"
          src="https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJlYWNofGVufDB8fDB8fHww"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint
          nostrum impedit nisi facilis ducimus. Molestias obcaecati quidem,
          quaerat sed esse maxime id sit harum dolorem sequi delectus quisquam
          dolor.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          ratione odit ipsa animi aperiam, officia neque in illum autem,
          corporis alias provident. Ipsam hic fugit excepturi veritatis velit,
          perferendis voluptatum!
        </p>
      <div>
        <button className="border-black mr-4 hover:shadow-xl w-40">Learn More</button>
        <button className="text-black border-black w-40 bg-gradient-to-r from-violet-500 to-fuchsia-500 mr-4 hover:shadow-xl">Book Your Trip</button>
      </div>
      </div>
    </div>
  );
};

export default Plan;
