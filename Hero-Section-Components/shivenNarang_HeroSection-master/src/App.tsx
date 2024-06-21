import "./App.css";
import Navbar from "./components/Navbar";
import Btn from "./components/Btn";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App flex justify-end pt-8 pr-7">
      {/* Loading */}
      <div className="Loading">
        <div className="Spiner"></div>
      </div>
      {/* Hero Section */}
      <div className="heroSection sm:w-full  md:w-6/12 h-full flex flex-col items-center justify-start">
        <Navbar />
        <h3 className="text-green-500 mt-28">21 March</h3>
        <h1 className="text-7xl title text-center">
          World
          <br />
          Forest Day
        </h1>
        <h3 className="sub-title text-green-400 relative bottom-6 z-10 text-3xl">
          Forest protection now
        </h3>
        <p className="py-10 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          provident placeat debitis doloremque nesciunt hic, aliquam ullam,
          dicta aspernatur ex reprehenderit ut perferendis mollitia culpa!
          Asperiores aspernatur laudantium nemo eum!
        </p>
        <Btn Text="Learn More" />
      </div>
    </div>
  );
}

export default App;
