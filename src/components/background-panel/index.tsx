import React from 'react';




const style = {
    backgroundImage: 'linear-gradient(to right, #000 , #00000000)',
    width: '100%',
    height: '100vh',
    top: '0px',
    left: '0px'
};
class BackgroundPanel extends React.Component {


    render() {
        return (

            <div className="position-relative" style={{width: '100vw', minHeight: '100vh'}}>
                <div  className="position-absolute" style={{opacity: '.3',right: '0px', top: '0px', zIndex: -1}}>
                    <div style={style} className="position-absolute"></div>
                    <img src="/images/background.png" style={{height: '100vh'}} alt="avengers"/>                    
                </div>
                {this.props.children}
            </div>

        );
    }
}

export default BackgroundPanel;