import React from 'react';
import Blackboard from '../images/Blackboard.png';
import { Helmet, HelmetProvider } from 'react-helmet-async';


export const ErrorPage = () => {

    return (
        <div className="ErrorPageStyle">
        <HelmetProvider><Helmet>
            <title>Error 404</title>
        </Helmet></HelmetProvider>
        <link rel="manifest" href="manifest.json"/>
            <div className = 'ErrorTxtCont'>
                <div className = 'ErrorTxt'>
                <p className = 'h1ErrorChalkboard'> 404 </p>
                <p className = 'h2ErrorChalkboard'>OOPS! PAGE NOT FOUND</p>
                <p className = 'h3ErrorChalkboard'>Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a problem.</p>
                </div>
            </div>
                <img class="ErrorBlackboard" src={Blackboard} alt = "Blackboard"/>
                <a href = "/">
                <div className="ErrorHomeButton" alt="Home"/>
                </a>
                <a href = "Contact">
                <div className="ErrorReportButton" alt="Report"/>
                </a>
                <div className = "ErrorBack" onClick={()=>{ window.history.back()}} alt = "Back"/>
        </div>
        
    )
}

export default ErrorPage
