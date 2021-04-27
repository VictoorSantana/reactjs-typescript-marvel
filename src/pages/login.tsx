import React, { useEffect, useState } from 'react';
import IPage from '../interfaces/page';
import logging from '../config/logging';
import { RouteComponentProps, withRouter } from 'react-router';
import BackgroundPanel from '../components/background-panel';

const LoginPage: React.FunctionComponent<IPage & RouteComponentProps<any>> = props => {

    const [message, setMessage] = useState<string>('');

    const [{user, pass}, setCredentials] = useState({        
        user: '',
        pass: '',       
    });

    useEffect(() => {
        logging.info(`Loading ${props.name}`);
    }, [props.name])

    return (
        <BackgroundPanel>
                <div className="container pt-5">
                    <div className="row">
                        <form className="col-md-3" onSubmit={(event) => {
                            event.preventDefault();    
                            
                            if(user && pass) {
                                if(user === 'root' && pass === 'root') {
                                    localStorage.setItem('authToken', 'root');
                                    props.history.push('personagens');
                                }
                            } else {
                                setMessage('Todos os campos devem estar preenchidos!');
                                return;
                            }

                            setMessage('Usuário ou senha estão incorretos!');
                            return;
                        }}>
                            <img src="/images/logo.svg" className="w-100 d-inline-block" alt="logo" />

                            <div className="form-group my-4 text-center">
                                <h4 className="h3 text-primary mb-0"> Bem vindo de volta </h4>
                                <small className="text-light">Acesse sua conta</small>
                            </div>

                            <div className="form-group">
                                <input 
                                value={user}
                                onChange={(event) => setCredentials({
                                    user: event.target.value,
                                    pass
                                })}
                                type="text" className="form-control" name="user" placeholder="Usuário" />
                            </div>
                            <div className="form-group">
                                <input 
                                value={pass}
                                onChange={(event) => setCredentials({
                                    pass: event.target.value,
                                    user
                                })}
                                type="password" className="form-control" name="pass" placeholder="Senha" />
                            </div>
                            {
                                message ? (
                                    <div className="form-group text-center">
                                        <p className="text-warning">*{message}</p>
                                    </div>
                                ) : ''
                            }
                            <div className="form-group d-flex">
                                <div className="w-50">
                                    <label htmlFor="save" className="small text-light">
                                        <input type="checkbox" name="save" id="save" />
                                        &nbsp;Salvar login
                                    </label>
                                </div>
                                <div className="w-50 text-right">
                                    <span className="small text-light border-bottom border-primary cursor-pointer"> Esqueci a senha </span>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block"> Entrar </button>
                            </div>
                            <div className="form-group text-center">
                                <p className="small text-light cursor-default"> Ainda não tem login? <p className="cursor-pointer text-primary d-inline-block mb-0">Cadastre-se</p> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </BackgroundPanel>
    )
}

export default withRouter(LoginPage);