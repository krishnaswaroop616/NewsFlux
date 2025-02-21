import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import NewsBoard from "./Components/Newsboard";

const App=()=>{
  const [category,setCategory]=useState("general");
  return (
      <div >
        <Navbar setCategory={setCategory}/>
        <NewsBoard category={category}/>
      </div>
  );
}


export default App;