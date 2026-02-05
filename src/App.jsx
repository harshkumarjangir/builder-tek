import { Route, Routes } from 'react-router-dom'
import footerData from './data/footerData.json'
import solutionDataOne from './data/solutions-one.json'
import solutionDataTwo from './data/solutions-two.json'
import Solutions from './pages/Solutions'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Blogs from './pages/Blogs'
import ScrollToTop from './components/common/ScrollToTop'
import WhoWeServe from './components/home/WhoWeServe'


const App = () => {
  return (
    <div className=''>
      <ScrollToTop />
      <Navbar />
      <div className="">
        {/* w-[85%] mx-auto */}
        <Routes>
          {/* <Route path='/' element={<Solutions solutionData={solutionDataOne} />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/solutions/rfq' element={<Solutions solutionData={solutionDataOne} />} />
          <Route path='/solutions/quote' element={<Solutions solutionData={solutionDataTwo} />} />
          <Route path='/who-we-serve' element={<WhoWeServe />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </div>
      {/* <Footer /> */}
      <Footer data={footerData} />

    </div>
  )
}

export default App