import logo from './logo.svg';
import './App.css';
import {useMediaQuery} from 'react-responsive'
import Mobile from './components/mobile/component'
import TabletMobile from './components/tablet-mobile/component'
import Desktop from './components/desktop/component'
import Laptop from './components/laptop/component'
import BigScreen from './components/big-screen/component'
import MediaQuery from 'react-responsive'

function App() {

  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  })

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  })

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  })

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  })

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px)",
  })


  return (
    <div className="App">
      {/* <h1>React Responsive</h1>
      {isMobileDevice && <Mobile />}
      {isTabletDevice && <> <TabletMobile />}
      {isDesktop && <Desktop />}
      {isLaptop && <Laptop />}
      {isBigScreen && <BigScreen />}
      </>} */}

      <MediaQuery minDeviceWidth={1224}>
        <p>Manipulate me</p>
      </MediaQuery>
    </div>
  );
}

export default App;
