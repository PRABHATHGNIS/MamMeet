
import './App.css';
import SelectOtherProps from './Home_Com/search';
import PersistentDrawerRight from './Dwrarer'
import SignUp from './Components/SignIn';
import { BrowserRouter,Routes, Route,Link } from 'react-router-dom';
import { Home } from './Home_Com/Home';
import { Mainregister } from './Mainregister';
 

import { green, purple } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
 import Api from './Components/Api';

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: green[500],
    },
  },
});
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
   
        <div className="App">
          <header className="App-header">

            <div><PersistentDrawerRight /></div>  {/* navbar component */}

           
      
          </header>
  {/* router implimintation  */}
  <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/sign" element={<SignUp/>} />
              <Route exact path="/register" element={<Mainregister/>} />
            

          {/*  <Link to={<SignUp/>}></Link>
 */}
            </Routes>
         {/* router implimintation  */}    

        </div>
        {/* API TESTING */}
        {/* <div><Api/></div> */}
      {/* <Registration/>  --------------registration page*/}
      </BrowserRouter>
      </ThemeProvider>
      <Api/> 

     
   
    </>

  );
}

export default App;       