import * as React from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';

function Base64Decode() {
    
    const [encText,setEncText]=React.useState("");
    const [DecText,setDecText]=React.useState("");

    const theme=useSelector((state)=>state.theme.theme);

    const DynamicStyle={
        color: theme === 'light' ? 'grey' : 'white',
        backgroundColor: theme === 'light' ? 'white' : '#33373C',        
    }

    const handleResult = async () => {
        if (!encText) {
            alert("Please Enter Text to Decode");
            return;
        }
        console.log("Encoded Text Sent to Server: ", encText);
        try {

            const responce = await axios.post("https://localhost:7292/api/EncodingDecoding/Decode64", {
                text: encText,
            });
            console.log(responce.data);
            setDecText(responce.data.decodedData);
        }
        catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    return (

    
        <>
            <div style={DynamicStyle} className="shadow-gray-500/50 mx-auto mt-8 w-3/4 rounded-lg p-8 shadow-lg">
                
                <div className="flex items-center justify-between rounded-t-lg bg-gray-800 p-4 text-white">
                    <a
                        href="#"
                        className="rounded-lg bg-gray-600 px-4 py-1 font-medium text-white shadow-md transition hover:bg-gray-700"
                    >
                        Decoding.Fast
                    </a>
                    <h1 className="text-2xl font-bold tracking-wide">
                        Base64 Online Decoding
                    </h1>
                </div>

                
                <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-lg font-semibold text-gray-700">
                        Enter Text to Decode
                    </h1>
                    <textarea
                        placeholder="Enter Encoded text here..."
                        value={encText}
                        onChange={(e) => setEncText(e.target.value)}
                        className="w-full text-black h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                    ></textarea>
                </div>

                
                <div className="mt-6 flex items-center justify-around">
                <button
                    onClick={handleResult}
                        className={`w-full mx-4 rounded-lg ${theme==='light' ?'bg-purple-500 hover:bg-purple-600':'bg-gray-600 hover:bg-gray-700'}  px-6 py-2 font-semibold text-white shadow-md transition `}>
                        Decode
                    </button>
                    
                </div>

                <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-lg font-semibold text-gray-700">
                        Decoded Text
                    </h1>
                    <textarea
                        placeholder="Decoded text will appear here..."
                        value={DecText}
                        className="h-32 w-full resize-none rounded-md border border-gray-300 p-4 text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>
                    
                </div>

            </div>
        </>
    );
}

export default Base64Decode;
