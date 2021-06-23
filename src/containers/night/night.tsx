import React from 'react';
import Audio from '../../assets/chioma/birthday.mp3';
import SVG from '../../assets/drawing.png';
import './night.css';


const Night: React.FC = ({children}) => {
    return (
        <div className="night">
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <div className="star"/>
            <audio src={Audio} autoPlay/>
            {children}
            <img className="decor" src={SVG} alt="birthday"/>
        </div>
    )
}

export default Night;