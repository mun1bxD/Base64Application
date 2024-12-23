import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MainPage(){
    const [Fade,setFade]=React.useState(false);
    const navigate =useNavigate();

    const handleGetStart=()=>{
        setFade(true);
        setTimeout(() => {
            navigate('/Base64Encode');    
        }, 500);
        
    }

    const theme=useSelector((state)=>state.theme.theme);

    const DynamicStyle={
        color: theme === 'light' ? 'black' : 'white',
        backgroundColor: theme === 'light' ? 'white' : '#33373C',        
    }
    return(
        <>
            <div   className="my-36 flex flex-col items-center justify-center space-y-2 px-24">
                <h1  className={`text-5xl font-bold text-center ${Fade?'opacity-30':'opacity-100'}`}>Effortless Base64 Encoding & Decoding</h1>
                <p className="text-center text-xl">Instantly encode or decode text to Base64 directly in your browser. A streamlined, 
                    utility-powered tool designed to simplify your data transformations and keep your workflow efficient.</p>
                    <div className='pb-4'>
                        <Button 
                            onClick={handleGetStart}  
                            variant='contained' 
                            style={
                                DynamicStyle
                            }>
                            Get Started
                        </Button>

                        
                    </div>                
            </div>

            
        </>
    );
}
export default MainPage;