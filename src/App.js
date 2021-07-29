import React from 'react'
import TypingText from './TypingText';

function App() {
    return (
        <div style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
        <div>
            {
                TypingText({
                     
                })}
        </div>   <div>
            {
                TypingText({
                    lines: ["Hello,","LOL","This actually works!"], options: {
                        intervals: [1000, 1000,200],
                        pipeColor: "green",
                        pipeWidth: "5px",
                        fontColor: "#000",
                        fontSize: "20px",
                        pipeAnimationLength: "0.8",
                        placement : "center"
                    }
                })}
        </div>
        </div>
    )
}

export default App
