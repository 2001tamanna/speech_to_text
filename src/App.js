import "./App.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";
import GifComponent from "./GifComponent";


const App = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    //subscribe to thapa technical for more awesome videos

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return (
        <div className="full">
            <div className="container">
                <h2>SAY IT WRITE IT</h2>
                <br/>
                <p>
                    <ol> 
                        <li>Click on start speaking</li>
                        <li>Speak</li>
                        <li>Click on Stop</li>
                    </ol>
                </p>

                <p className="wuhu">WOHOO! your speech is converted into text.</p>

                <GifComponent></GifComponent>

                <div className="main-content" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-style">

                    <button onClick={setCopied}>
                        {isCopied ? 'Copied!' : 'Copy to clipboard'}
                    </button>
                    <button onClick={startListening}>Start Speaking</button>
                    <button onClick={SpeechRecognition.stopListening}>Stop</button>

                </div>

            </div>

        </div>
    );
};

export default App;