import React from 'react';
import Climate from './Climate';
//import 'bootstrap/dist/css/bootstrap.css'

const SiteInfo=() =>{
    return(
        <div className="siteInfo">
           <div className="title">
                What is the Climate Today
           </div>
           <div className="sub-title">
                <Climate>Weather Information</Climate>
           </div>
        </div>
    )
}

export default SiteInfo

