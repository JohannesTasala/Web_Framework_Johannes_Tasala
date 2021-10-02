import React from 'react'

export default function SideBar(props) {
    return (
        <div className="lowerBox">
        <div className="sidePanel">

        <span style={{fontWeight: 700, fontSize: '20px'}}>{ props.head4 }</span> <span style={{fontWeight: 600}}>{ props.head5 }:</span> { props.content3 } 

        </div>
        </div>
    )
}