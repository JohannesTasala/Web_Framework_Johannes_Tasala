import React from 'react'

export default function FrontNews(props) {
    return (
        <div className="lowerBox">

        <div className="frontNewsBox">
            <span style={{color: 'blue'}}>{ props.head2 }</span> { props.content2 } { props.head3 }
            <img src={props.image}></img>
        </div>
        
        </div>
    )
}