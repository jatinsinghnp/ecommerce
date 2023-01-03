import Asidebar from "./components/Asidebar";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import ProfileCreate from "./components/ProfileCreate";
import Singup from "./components/Singup";
import Login from "./components/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "./components/Product";
import News from "./components/news/News";
import NewsDetails from "./components/news/NewsDetails";
import NewsPost from "./components/news/NewsPost";
function App() {
  const { access_token } = useSelector((state) => state.auth);
  return (
    <>
      <div className="flex w-[900px] mx-auto">
        {/* <Asidebar />   */}
        <div className="w-full bg-[#F2F2F2] ">
          <NavBar />
          <Routes>
            <Route
              path="/login"
              element={!access_token ? <Login /> : <Navigate to="/" />}
            />
            <Route path="/register" element={<Singup />} />
            <Route path="/newspost" element={<NewsPost />} />
            <Route
              path="/"
              element={
                access_token ? <ProfileCreate /> : <Navigate to="/login" />
              }
            />
            <Route path="/prod" element={<Product />} />
            <Route path="/news" element={<News />} />
            <Route path="/newsdetail" element={<NewsDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
