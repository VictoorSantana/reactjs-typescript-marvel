import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundPanel from '../../components/background-panel';
import ICharacter from '../../interfaces/character';



class CharacterRoute extends React.Component<{}, { chars: Array<ICharacter> }> {


    constructor(props: any) {
        super(props);
        this.state = {
            chars: []
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

    render() {
        let { chars } = this.state;
        return (
            <BackgroundPanel>
                <div className="bg-dark border-bottom border-danger py-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2">
                                <Link to="/home" className="d-inline-block w-100">
                                    <img src="/images/logo.svg" className="w-100 d-inline-block" alt="logo" />
                                </Link>
                            </div>
                            <div className="col-md-4"></div>
                            <div className="col-md-6 align-self-end d-flex flex-wrap justify-content-between">
                                <Link to="/personagens" className="h4 text-white mb-0 d-inline-block"> Personagens </Link>
                                <Link to="/filmes" className="h4 text-secondary mb-0 d-inline-block"> Filmes </Link>
                                <Link to="/hqs" className="h4 text-secondary mb-0 d-inline-block"> HQs </Link>
                                <div className="d-inline-block">
                                    <img src="/images/user.png" className="rounded-circle" style={{ width: '40px' }} alt="user" />
                                    <Link to="/" type="button" className="btn btn-link text-secondary mb-0"> Sair </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </BackgroundPanel>
        );
    }
}

export default CharacterRoute;