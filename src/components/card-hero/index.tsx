import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


type Props = {
    image: string,
    title: string,
    text: string,
    link: string,
    width: string,
    available: [],
    stars: number
};

class CardHero extends React.Component<Props> {
    static default = {
        image: 'https://via.placeholder.com/468x780',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        link: '#',
        width: '278px',
        available: [],
        stars: 0
    };

    render() {
        const { image, link, text, title, width, available, stars } = this.props;

        return (
            <>
                <div className="d-inline-block cardhero-item" style={{ width }} tabIndex={1}>
                    <div className="shadow position-relative">
                        <img src={image} className="rounded d-inline-block w-100" alt="spider-man" />
                        <div className="gradient-vertical-primary-transparent px-3 py-3 position-absolute rounded" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', left: '0px', bottom: '0px' }}>
                            <h5 className="text-center text-white h4"> {title} </h5>
                            <p className="text-white" style={{ height: '110px' }}>{text.length > 130 ? text.substring(0, 130) + '...' : text}</p>
                            <Link to={link} className="d-inline-block w-100 text-center text-white"> Ver detalhes </Link>
                        </div>
                    </div>
                </div>
                <div className="cardhero-background">
                    <div className="cardhero-popup shadow">
                        <div className="d-flex w-100">
                            <img src={image} className="rounded d-inline-block" style={{ width: '300px' }} alt="spider-man" />
                            <div className="py-5 px-3">
                                <h3 className="text-white"> {title} </h3>
                                <p className="text-white"> {text} </p>
                                <br />
                                {
                                    available.length > 0 ? (
                                        <>
                                            <p className="text-white"> Disponível para comprar </p>
                                            <div>
                                                <img src="https://via.placeholder.com/50x50" style={{ width: '50px', borderRadius: '10px' }} className="shadow" alt="comprar" />
                                            </div>
                                            <br />
                                        </>
                                    ) : ('')
                                }
                                <p className="text-white mb-0" style={{ fontSize: '30px' }}> Crítica </p>
                                <div>
                                    {
                                        stars > 0 ? (
                                            [...Array(stars)].map((e, i) => <img src="/images/star.svg" key={i} alt="estrela" />)
                                        ) : ('')
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default CardHero;