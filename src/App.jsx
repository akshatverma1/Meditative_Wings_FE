import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import CategoryPage from "./pages/CategoryPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ExplorePage from "./pages/ExplorePage"
// import  Categories from "./components/Categories.jsx"

import M1 from "./categories/M1.jsx"
import M2 from "./categories/M2.jsx"
import M3 from "./categories/M3.jsx"
import M4 from "./categories/M4.jsx"
import M5 from "./categories/M5.jsx"
import M6 from "./categories/M6.jsx"
import M7 from "./categories/M7.jsx"
import M8 from "./categories/M8.jsx"  
import Cate_main from "./categories/cate_main.jsx"
import FormData from "./categories/Form.jsx"
import  NewPostForm  from "./categories/NewRequest.jsx"
import Newpost from "./categories/Postnew.jsx";
import OurTeam from "./pages/Teampage.jsx";
import { ThemeProvider } from "./components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="dark min-h-screen flex flex-col relative overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          {/* <Route path="/category" element={<Categories></Categories> } /> */}
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/category/M1" element={<M1 />} />
          <Route path="/category/M2" element={<M2 />} />
          <Route path="/category/M3" element={<M3 />} />
          <Route path="/category/M4" element={<M4 />} />
          <Route path="/category/M5" element={<M5 />} />
          <Route path="/category/M6" element={<M6 />} />
          <Route path="/category/M7" element={<M7 />} />
          <Route path="/category/M8" element={<M8 />} />
          <Route path="/categorym" element={<Cate_main />} />
          <Route path="/form" element={<FormData></FormData>}></Route>
          <Route path="/newRequestPost" element={<NewPostForm></NewPostForm>}></Route>
          <Route path="/newpost" element={<Newpost></Newpost>}></Route>
          <Route path="/OurTeam" element={<OurTeam></OurTeam>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

