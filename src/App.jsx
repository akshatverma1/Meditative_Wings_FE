import { Routes, Route,useParams,useNavigate } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PostPage from "./pages/PostPage"
import CategoryPage from "./pages/CategoryPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import ExplorePage from "./pages/ExplorePage"
// import  Categories from "./components/Categories.jsx"
 
import Cate_main from "./categories/cate_main.jsx"
import FormData from "./categories/Form.jsx"
import  NewPostForm  from "./categories/NewRequest.jsx"
import Newpost from "./categories/Postnew.jsx";
import OurTeam from "./pages/Teampage.jsx";
import VideoPage from "./components/Videopage.jsx"
import { VideoShow } from "./components/Videoshow.jsx"
import { ThemeProvider } from "./components/ThemeProvider"
import TTT from "./components/ttt.jsx"
import LockPage from "./categories/Lockpage.jsx"
import LockTweetPage from "./categories/TweetLockPage.jsx"
import Tweet from "./components/Tweet.jsx"
import Tweetpost from "./categories/Tweetpost.jsx"
import Payment from "./pages/paymentpage.jsx"
import Disclamier from "./pages/Disclamier.jsx"
import Termsandcondition from "./pages/Termsandconditions.jsx"
import PrivacyPolics from "./pages/PrivacyPolics.jsx"
function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="dark min-h-screen flex flex-col relative overflow-hidden">
        <Routes>
        <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostPage />} />
          {/* <Route path="/category" element={<Categories></Categories> } /> */}
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/categorym" element={<Cate_main />} />
          <Route path="/form" element={<FormData></FormData>}></Route>
          <Route path="/newRequestPost" element={<NewPostForm></NewPostForm>}></Route>
          <Route path="/newpost" element={<Newpost></Newpost>}></Route>
          <Route path="/OurTeam" element={<OurTeam></OurTeam>}></Route>
          {/* <Route path="/Videoshow" element={<VideoPage></VideoPage>}></Route> */}
          <Route path="/Videoshows/:ids" element={<VideoShow></VideoShow>}></Route>
          <Route path="/ttt/:id" element={<TTT></TTT>}></Route>
          <Route path="/Lock" element={<LockPage></LockPage>}></Route>
          <Route path="/TweetLock" element={<LockTweetPage></LockTweetPage>}></Route>
          <Route path="/tweet" element={<Tweet></Tweet>}></Route>
          <Route path="/newtweetpost" element={<Tweetpost></Tweetpost>}></Route>
          <Route path="/payment" element={<Payment></Payment>}></Route>
          <Route path="/disclamier" element={<Disclamier></Disclamier>}></Route>
          <Route path="/terms" element={<Termsandcondition></Termsandcondition>}></Route>
          <Route path="/privacy" element={<PrivacyPolics></PrivacyPolics>}></Route>
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App

