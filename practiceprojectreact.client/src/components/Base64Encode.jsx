import { Button } from '@mui/material';
import * as React from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';

function Base64Encode() {

    const[liveEncode,setLiveEncode]=React.useState(false);
    const [encText, setEncText] = React.useState("");
    const [plainText,setPlainText]=React.useState("");

    const [file, setFile] = React.useState("");

    const [encFile, setencFile] = React.useState("");
    const handleLiveEncode=()=>{
        return !liveEncode;
    }
    const handleResult = async () => {
        if (!plainText) {
            alert("Please Enter Text to encoded");
            return;
        }
        try {

            const responce = await axios.post("https://localhost:7292/api/EncodingDecoding/Encode64", {
                text: plainText,
            });
            setEncText(responce.data.encodedData);
        }
        catch (error) {
            console.error("Error:", error);
            alert("An error occurred. Please try again.");
        }
    };

    const handleFile = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const AllowedType = ['image/png', 'image/jpeg', 'text/plain', 'applicaiton/pdf']
            if (!AllowedType.includes(selectedFile.type)) {
                alert("Please select a valid file (txt, jpeg, png, or pdf).");
                return;
            }
            setFile(selectedFile);
        }
    }
    const handleFileSubmit = async (e) => {
        
        e.preventDefault();
        if (!file) {
            alert("No file selected");
            return;
        }
        
        const formData = new FormData();
       
        formData.append("formFile", file);
        try {
            
            const response = await axios.post("https://localhost:7292/api/EncodingDecoding/EncodeFile", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },

            });

            setencFile(response.data.encodedFile);
            }

        catch (e) {
            console.log("Error occur", e.response ? e.response.data : e);
        }

    }

    const theme=useSelector((state)=>state.theme.theme);

    const DynamicStyle={
        color: theme === 'light' ? 'grey' : 'white',
        backgroundColor: theme === 'light' ? 'white' : '#33373C',        
    }
    return (
        <>
            <div style={DynamicStyle} className="shadow-gray-500/50 mx-auto mt-8 w-3/4 rounded-lg p-8 shadow-lg">

                <div className="flex items-center justify-between rounded-t-lg bg-gray-800 p-4 text-white">
                    <a
                        href="#"
                        className="rounded-lg bg-gray-600 px-4 py-1 font-medium text-white shadow-md transition hover:bg-gray-700"
                    >
                        Encoding.Fast
                    </a>
                    <h1 className="text-2xl font-bold tracking-wide">
                        Base64 Online Encoding
                    </h1>
                </div>

                <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-lg font-semibold text-gray-700">
                        Enter Text to Encode
                    </h1>
                    <textarea
                        placeholder="Enter plain text here..."
                        value={plainText}
                        onChange={(e) => setPlainText(e.target.value)}
                        className="w-full h-32 p-4 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 resize-none"
                    ></textarea>
                </div>

                <div className="mt-6 flex items-center justify-around">
                    <button
                    onClick={handleResult}
                        className={` w-full mx-4 rounded-lg ${theme==='light' ?'bg-purple-500 hover:bg-purple-600':'bg-gray-600 hover:bg-gray-700'}  px-6 py-2 font-semibold text-white shadow-md transition `}>
                        Encode
                    </button>
                    
                </div>

                <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-lg font-semibold text-gray-700">
                        Encoded Text
                    </h1>
                    <textarea
                        placeholder="Encoded text will appear here..."
                        value={encText}
                        className="h-32 w-full resize-none rounded-md border border-gray-300 p-4 text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                    ></textarea>

                </div>

                <div className="mt-4 rounded-lg bg-white p-6 shadow-md">
                    <h1 className="mb-2 text-lg font-semibold text-gray-700">
                        Image Encoding and Decoding
                    </h1>
                    <input
                        type="file"
                        onChange={handleFile}
                        accept='.png, .jpeg, .pdf, .txt'
                        className="block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 p-4 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                    
                        <button
                        
                        className={`rounded-lg w-full mt-4 ${theme==='light' ?'bg-purple-500 hover:bg-purple-700':'bg-gray-600 hover:bg-gray-700'}  px-6 py-2 font-semibold text-white shadow-md transition `}
                        onClick={handleFileSubmit}

                        >
                            Encode File
                        </button>
                        <textarea
                            placeholder="Encoded text will appear here..."
                        value={encFile}
                        readOnly
                            className="mt-4 h-32 w-full resize-none rounded-md border border-gray-300 p-4 text-black focus:outline-none focus:ring-2 focus:ring-pink-400"
                            ></textarea>
                    
                </div>

            </div>
        </>
    );
}

export default Base64Encode;

