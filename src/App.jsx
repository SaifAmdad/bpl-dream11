import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Players from "./components/Players";

function App() {
  const [count, setCount] = useState(5000);
  const [data, setData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setData(data.players);
    };
    loadData();
  }, []);

  return (
    <>
      <Navbar count={count} />
      <Banner />
      <Players data={data} setCount={setCount} count={count} />
    </>
  );
}

export default App;
