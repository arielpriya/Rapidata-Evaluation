import { Routes, Route } from 'react-router-dom';
import Welcome from '../containers/welcome/Welcome';
import Headers from '../components/layout/Header';
import { Container, ContantWrap } from '../components/common/commonStyle';
import Footer from '../components/layout/Footer';


const RouteList = () => {
  return (
    <Container>
      <ContantWrap>
        <Headers />
        <Routes>
          <Route index element={<Welcome />} />
        </Routes>
      </ContantWrap>
      <Footer />
    </Container>
  )
}

export default RouteList