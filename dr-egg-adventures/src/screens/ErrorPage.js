import React from 'react';
import Report from '../images/btn-Report.png';
import Home from '../images/btn-Home.png';
import Blackboard from '../images/Blackboard.png';
import {useHistory } from "react-router-dom";
import Helmet from "react-helmet";


export const ErrorPage = () => {

    let history = useHistory();


    const ReportEventHandler = () => {
        history.push('/contact')
    }

    const HomeEventHandler = () => {
        history.push('/home')
        console.log(2);
    }

    return (
        <div className="ErrorPageStyle">
        <Helmet>
            <title>Error 404</title>
        </Helmet>
            <div className = 'ErrorTxtCont'>
                <div className = 'ErrorTxt'>
                <p className = 'h1ErrorChalkboard'> 404 </p>
                <p className = 'h2ErrorChalkboard'>OOPS! PAGE NOT FOUND</p>
                <p className = 'h3ErrorChalkboard'>Sorry, the page you’re looking for doesn’t exist. If you think something is broken, report a problem.</p>
                </div>
            </div>
                <img class="ErrorBlackboard" src={Blackboard} alt = "Blackboard"/>
                <a href = "/">
                <img className="ErrorHomeButton" src={Home} alt="Back"/>
                </a>
                <a href = "/contact">
                <img className="ErrorReportButton" src={Report} alt="Back"/>
                </a>
        </div>
        
    )
}

export default ErrorPage
