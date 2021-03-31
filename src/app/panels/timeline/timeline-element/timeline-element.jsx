import React from 'react'

export default function TimelineElement(props) {
    return <div className="timeline-element">
        <div className="element-name">{props.name}</div>
        <button className="element-toggler">С</button>
        
        <div className="element-time">
            <div className="time-block" style={{ 
                marginLeft: props.start / 20,
                width: props.duration / 20  
            }}></div>
        </div>
    </div>
}
