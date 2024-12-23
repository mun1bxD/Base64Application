import { useEffect, useState } from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import MainPage from './components/MainPage.jsx';
import Base64Encode from './components/Base64Encode.jsx';
import Base64Decode from './components/Base64Decode.jsx';
import { useSelector } from 'react-redux';
import What_is_Base64 from './components/What_is_Base64.jsx';

function App() {
    
    const theme=useSelector((state)=>state.theme.theme);

    const DynamicStyle={
        color: theme === 'light' ? 'grey' : 'white',
        backgroundColor: theme === 'light' ? 'white' : '#33373C',        
    }
    console.log("current style",theme);
    return(
    
    <div style={DynamicStyle} 
    className={`flex min-h-screen flex-col ${theme === 'light' ? 'bg-gradient-to-r from-violet-100 to-fuchsia-200' : ''}`}>
        <Navbar/>
        <Routes>
            {/* <Base64Decode/> */}
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/Base64Encode' element={<Base64Encode/>}></Route>
                <Route path='/Base64Decode' element={<Base64Decode />}></Route>
                <Route path='/What_is_Base64' element={<What_is_Base64 />}></Route>
        </Routes>
    </div>
 );
}

export default App;