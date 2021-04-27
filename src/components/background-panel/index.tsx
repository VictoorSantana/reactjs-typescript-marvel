// import React from 'react';

const BackgroundPanel = (props: {children: JSX.Element}) => {
    return (
        <>
            <div  className="position-absolute" style={{opacity: '.3',right: '0px', top: '0px', zIndex: -1}}>
                <div style={{
                    backgroundImage: 'linear-gradient(to right, #000 , #00000000)',
                    width: '100%',
                    height: '100vh',
                    top: '0px',
                    left: '0px'
                }} className="position-absolute"></div>
                <img src="/images/background.png" style={{height: '100vh'}} alt="avengers"/>                    
            </div>
            {props.children}
        </>
    );
}
export default BackgroundPanel;