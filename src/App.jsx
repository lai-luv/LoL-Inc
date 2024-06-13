import "./App.css";
import Calendar from "./Componets/Calendar";
import ChildCareForm from "./Componets/ChildCareForm";
import Reviews from "./Componets/Reviews";
import NavBar from "./Componets/NavBar";
import AboutUs from "./Componets/AboutUs";
import { Route, Routes } from "react-router-dom";
import BIRDS from "vanta/src/vanta.birds";
import { useEffect } from "react";

function App() {
  // let pages;
  // switch (window.location.pathname) {
  //   case "/":
  //     pages = <ChildCareForm />;
  //     break;
  //   case "/Calendar":
  //     pages = <Calendar />;
  //     break;
  //   case "/AboutUs":
  //     pages = <AboutUs />;
  //     break;
  //   case "/CommentReview":
  //     pages = <Reviews />;
  //     break;
  // }
  useEffect(() => {
    BIRDS({
      el: ".backGround",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 1000.0,
      minWidth: 3000.0,
      scale: 1.0,
      scaleMobile: 1.0,
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="backGround"></div>
      <div className="container">
        <Routes>
          <Route path="/" element={<ChildCareForm />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
