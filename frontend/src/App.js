import "./App.css";
import fonts from "webfontloader";
import { useEffect } from "react";
import Home from "./pages/Home";
function App() {
  useEffect(() => {
    fonts.load({
      google: {
        families: [
          "Roboto:100,200,300,400,500,600,700,800,900",
          "Lato:100,200,300,400,500,600,700,800,900",
          "Nunito:100,200,300,400,500,600,700,800,900",
          "Montserrat:100,200,300,400,500,600,700,800,900",
          "Readex Pro:100,200,300,400,500,600,700,800,900",
          "Luxurious Script:100,200,300,400,500,600,700,800,900",
          "Bebas Neue:100,200,300,400,500,600,700,800,900",
          "Poppins:100,200,300,400,500,600,700,800,900",
        ],
      },
    });
  }, []);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
