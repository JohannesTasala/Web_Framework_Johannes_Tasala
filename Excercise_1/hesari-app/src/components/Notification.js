import react from "react";

export default function Notification(props){
    return (
    <div className="notificationBox">
        <span style={{fontWeight: 700}}>{ props.head }:</span> { props.content }
    </div>
    )
}