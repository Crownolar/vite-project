import { ThemeContext } from "./Pages/ContextApi/Context";
import { useContext } from "react";

const Shop = () => {
  const { state } = useContext(ThemeContext);

  return (
    <>
      <main className="top" style={{ backgroundColor: state ? "orange" : null }}>
        <h1 style={{ color: state ? "black" : null }}>Shopping Soon</h1>
      </main>
    </>
  );
};

export default Shop;
