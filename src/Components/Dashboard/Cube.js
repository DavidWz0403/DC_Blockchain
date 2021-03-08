import React from 'react';
// import './Cube.css';
import './Cube2.css';

function Cube(props) {
    return (
        <>
            

            <div className="custom-container">
                
                

                <div className="cube">
                    <div className="face top gold-background">{props.top}</div>
                    <div className="face bottom gold-background">{props.bottom}</div>
                    <div className="face left gold-background">{props.left}</div>
                    <div className="face right gold-background">{props.right}</div>
                    <div className="face front gold-background">{props.front}</div>
                    <div className="face back gold-background">{props.back}</div>
                </div>
            </div>
        </>
    )
}

export default Cube;
