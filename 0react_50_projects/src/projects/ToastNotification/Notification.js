import React from "react";

import "./ToastNotification.css";

function Notification({notifs, type, message, getRandomType, getRandomMessage}) {


    return (
        <div className={type ? `tn-toast tn-${type}` : `tn-toast tn-${getRandomType()}`}>
            {
                message ? 
                message
                :
                `${getRandomMessage()}`
            }
        </div>
        // notifs.map((item, index) => {
        //     return (
        //         <div key={index} className={item.type ? 
        //         `tn-toast tn-${item.type}` 
        //         : `tn-toast tn-${getRandomType()}`
        //         }>
        //             {
        //                 item.message ? 
        //                 item.message
        //                 :`${getRandomMessage()}`
        //             }
        //         </div>
        //         )
        //     })
    )
}

export default Notification;