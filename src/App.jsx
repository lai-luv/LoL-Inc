import "./App.css";
import Calendar from "./Componets/Calendar";
import ChildCareForm from "./Componets/ChildCareForm";
import Reviews from "./Componets/Reviews";
import NavBar from "./Componets/NavBar";
import AboutUs from "./Componets/AboutUs";
import { Route, Routes } from "react-router-dom";

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

  return (
    <>
      <NavBar />
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
