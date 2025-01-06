import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
     
      <header className="">
       <Navbar/>
      </header>

    
    
      <section className="h-[85vh]">

      </section>


      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} TODO APP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
