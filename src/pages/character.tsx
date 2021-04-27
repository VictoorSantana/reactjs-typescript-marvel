import { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import IPage from '../interfaces/page';
import BackgroundPanel from '../components/background-panel';
import routes from '../config/routes';
import CardHero from '../components/card-hero';
import ICharacter from '../interfaces/character';
import axios from 'axios';
import Navigation from '../components/navigation';


class CharacterPage extends Component<IPage & RouteComponentProps<any>, { chars: Array<ICharacter>, position: number }> {


    constructor(props: any) {
        super(props);

        this.state = {
            chars: [],
            position: 0
        }
    }


    componentDidMount = () => {
        axios.get<ICharacter[]>('/dummy/characters.json')
            .then(response => {
                this.setState({
                    chars: response.data
                });
            });
    }



    moveRight = async () => {
        for(var i = 0; i < 300 / 5; i++) {
            this.setState({ position: this.state.position + 5 });
            await this.delay(1);
        }
    }

    moveLeft = async () => {
        for(var i = 0; i < 300 / 5; i++) {
            this.setState({ position: this.state.position - 5 });
            await this.delay(1);
        }
    }

    delay = (ms:number) => new Promise((resolve, reject) => setTimeout(resolve, ms));


    render() {
        let { name, history } = this.props;
        let { chars, position } = this.state;

        return (
            <BackgroundPanel>
                <>
                    <Navigation
                        routes={routes}
                        actual={name}
                        history={history}
                    ></Navigation>
                    <div>



                        <div className="position-relative container justify-content-center d-flex">
                            <div className="position-absolute m-auto" onClick={() => this.moveLeft()} style={{ left: '10px', top: '0px', bottom: '0px', width: '50px', height: '38px', zIndex: 4 }}>
                                <img src="/images/l_arrow.png" alt="left" />
                            </div>
                            <div className="overflow-x-hidden" style={{width: '300px'}}>
                                <div className="d-flex" style={{transform: `translateX(-${position}px)`}}>
                                {
                                    chars.map((char: ICharacter, index: number) => {
                                        return <div className="d-inline-block mx-2">
                                            <CardHero
                                                key={index}
                                                width="280px"
                                                value={char}
                                            ></CardHero>
                                        </div>;
                                    })
                                }
                                </div>
                            </div>
                            <div className="position-absolute m-auto" onClick={() => this.moveRight()}  style={{ right: '10px', top: '0px', bottom: '0px', width: '50px', height: '38px', zIndex: 4 }}>
                                <img src="/images/r_arrow.png" alt="right" />
                            </div>
                        </div>




                    </div>
                </>
            </BackgroundPanel>
        );
    }
}

export default CharacterPage;