# About

This is a simple component that utilises basic CSS and React.js to create typing like animation to the provided text or JSX element.

# Installation

`npm install typingtext`

Usage

```

import TypingText from './TypingText';

<div>
            {
                TypingText({
                    lines: ["Hello!","This is typing text"], 
                    options: {
                        intervals: [1000,200],
                        pipeColor: "green",
                        pipeWidth: "5px",
                        fontColor: "#000",
                        fontSize: "20px",
                        pipeAnimationLength: "0.8",
                        placement : "center",
                        userSelect : "all"
                    }
                })}
        </div>

```

## Parameters
TextTyping component takes two parameters. They are:
* Lines : Array : Takes plain strings or any JSX element.
* Options : There are several options to customise the component. Accepted options are:
	*  intervals : Array : Time allocated(in ms) for the corresponding index's line. Default value is 1000(ms).
	* pipeColor : String : Accepts any valid CSS input : Color of the pipe after the characters. Defaults to red. 
	* pipeWidth : String : Accepts any valid CSS input : Width of the pipe.
	* fontColor  : String : Accepts any valid CSS input : String's color.
	* pipeAnimationLength : String : Pipe blinking duration in seconds.
	* placement : String : Accepts any valid CSS input : similar to css grid's placement items property.