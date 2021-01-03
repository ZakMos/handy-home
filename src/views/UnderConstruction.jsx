import React, { Component } from 'react'

export default class UnderConstruction extends Component {
    render() {
        return (
            <>
            <div className="mainAddress">
                <p>Am Grün 32,</p>
                <p>35037 Marburg</p>
                <p> Deutschland</p>
            </div>
            <div tabIndex={1} 
                onTouchMove={(e) => {
                if(e.currentTarget === e.target) {
                    console.log('touch Move self');
                } else {
                    console.log('Touch Move child', e.target);
                }
                if(!e.currentTarget.contains(e.relatedTarget)) {
                    console.log('Touch Move entered self');
                }
            }}
                onScroll={(e) => {
                if(e.currentTarget === e.target) {
                    console.log('Scroll self');
                } else {
                    console.log('Scroll child', e.target);
                }
                if(!e.currentTarget.contains(e.relatedTarget)) {
                    console.log('Scroll entered self');
                }
            }}>
                <iframe className="googleMap" title="Handy Home" 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2521.334721819271!2d8.7718138!3d50.8064368!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bc6357affa6cbb%3A0x8da2617298f46c81!2sHandy%20Reparatur%20%2F%20Handy%20Home!5e0!3m2!1sen!2sde!4v1608141630843!5m2!1sen!2sde" 
                frameBorder="0" 
                cancelable="true"
                style={{border:'solid black 2px',
                        width: '90%',
                        height: 500}} 
                aria-hidden="false" tabIndex="0">
                </iframe>
            </div>
            <div className="under-construction">
                <p>Die Seite befindet sich noch im Aufbau.</p> 
                <p>In Kürze finden Sie hier mehr Informationen.</p>
                <p>Vielen Dank für Ihr Verständnis!</p>
            </div>
            </>
        )
    }
}
