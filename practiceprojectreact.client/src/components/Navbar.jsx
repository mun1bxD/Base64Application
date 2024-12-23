import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { changeTheme } from '../features/brightness/brightnessSlice';
function Navbar(){

    const navigate = useNavigate();
    const handleEncode=()=>{
        navigate('/Base64Encode');
    }

    const handleDecode=()=>{
        navigate('/Base64Decode');
    }
    const infoPage = () => {
        navigate('/What_is_Base64');
    }
    const dispatch=useDispatch();
    const theme=useSelector((state)=>state.theme.theme)
    const DynamicStyle={
        color: theme === 'light' ? 'black' : 'white',
        backgroundColor: theme === 'light' ? 'white' : 'black',        
    }
    return(
        <>
        <Box>
        <AppBar position="static" 
            // sx={{backgroundColor: 'white',color:'black'}}
            style={DynamicStyle}>
            
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color=""
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon 
                    style={DynamicStyle}
                    />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Base64 Encode-Decode
            </Typography>
            <Box className='space-x-4'>
                <Button 
                    onClick={handleEncode} variant="text" 
                    style={DynamicStyle}>
                        Encode</Button>
                <Button
                onClick={handleDecode} variant="text"
                style={DynamicStyle}>
                                Decode</Button>
                            <Button
                                onClick={infoPage} variant="text"
                                style={DynamicStyle}>
                                What is Base64</Button>
                <Button 
                    startIcon={theme==='light'?<LightModeIcon/>:<DarkModeIcon/>} 
                    onClick={()=>dispatch(changeTheme())} 
                    style={DynamicStyle}>

                </Button>

            </Box>
            </Toolbar>
        </AppBar>
        </Box>
        </>
    );
}

export default Navbar;