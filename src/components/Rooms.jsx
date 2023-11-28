import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2 ">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis in
          placeat, assumenda cumque iste excepturi voluptatem sit dolor.
          Voluptatum dolores voluptas, placeat unde architecto eius sunt
          repellat eos excepturi numquam.
        </p>
      </div>
      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="/" />
        <img className="object-cover w-full h-full row-span-2" src="https://images.unsplash.com/photo-1608198399988-341f712c3711?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXN8ZW58MHx8MHx8fDA%3D" alt="/" />
        <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tc3xlbnwwfHwwfHx8MA%3D%3D" alt="/" />
      </div>
    </div>
  );
};

export default Rooms;
