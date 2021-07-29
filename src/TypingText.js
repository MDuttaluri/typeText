import React, { useState, useEffect } from "react"
import './styles.css';

function TypingText({ lines, options }) {
    const [items, setItems] = useState([])
    const [counter, setCounter] = useState(0)
    //const [intervals, setIntervals] = useState(options?.intervals || new Array(lines?.length + 1).fill(1000))
    let intervals = options?.intervals

    function getPromise(interval) {
        return new Promise(resolve => setTimeout(resolve, interval))
    }
    async function loaded() {
        let i = -1
        for (; i < lines.length; i++) {
            setItems(getItems(i))
            await getPromise(intervals[i])
        }
    }

    useEffect(() => {
        if (!lines) {
            return
        }
        if (!options?.intervals) {
            
            intervals = new Array(lines?.length).fill(1000)
        } else if (options?.intervals.length < lines.length) {
            let padding = new Array(lines.length - options.intervals.length)
           intervals = [...options.intervals, ...padding]

        }
        loaded()
    }, [])

    


    function getItems(count) {
        let items = []
        let bound = Math.min(count, lines?.length - 1)


    for (let i = 0; i <= bound; i++) {
        
        let style = {
            color : options?.fontColor||"black",
            fontSize : options?.fontSize||"30px",
            paddingRight : "0px",
            borderRight : `${count>i ? "none":"inset"} ${options?.pipeWidth||"5px"} ${options?.pipeColor||"red"}`,
            userSelect  : options?.userSelect?options.userSelect:"none",
            animation: count > i ? "none" : `animText ${intervals[i]}ms steps(80, end) forwards,animText__cursor ${options?.pipeAnimationLength||"0.8"}s infinite` 
       }
        items.push(<div className="introDiv__item"><p style={ style } className={count > i ? "animText noAnim" : "animText"}>{lines[i]}</p></div>)
    }
    return items
}

return (
    
        <div className="introDiv__itemsDiv" style={{placeItems:options?.placement?options.placement:"center",height:"fit-content"}}>
            {items}
        </div>

  
)
}

export default TypingText