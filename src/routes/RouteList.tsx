import { Routes, Route } from 'react-router-dom';
import Welcome from '../containers/welcome/Welcome';
import Solving from '../containers/solving/Solving';
import Thankyou from '../containers/thankyou/Thankyou';
import Headers from '../components/layout/Header';
import Footer from '../components/layout/Footer';


const RouteList = () => {
  return (
    <div className='container'>
      <div>
        <Headers />
        <Routes>
          <Route index element={<Welcome />} />
          <Route path='/solving' element={<Solving />} />
          <Route path='/thankyou' element={<Thankyou />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default RouteList