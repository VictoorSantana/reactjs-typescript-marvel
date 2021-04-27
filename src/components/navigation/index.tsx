import { Link } from "react-router-dom";
import IRoute from "../../interfaces/route";




const Navigation = (props: { routes: IRoute[], actual: string, history: any }) => {
    return (
        <>
            <div className="bg-dark border-bottom border-danger py-2 mb-4">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 col-3 d-block d-sm-none">

                        </div>
                        <div className="col-md-2 col-sm-6 col-6">
                            <Link to="/home" className="d-inline-block w-100">
                                <img src="/images/logo.svg" className="w-100 d-inline-block" alt="logo" />
                            </Link>
                        </div>
                        <div className="col-sm-3 col-3 d-block d-sm-none">

                        </div>
                        <div className="col-md-4 d-none d-md-block"></div>
                        <div className="col-md-6 align-self-end d-none d-md-flex flex-wrap justify-content-between">
                            {props.routes.map((route, index) =>
                                route.private ? (
                                    <Link key={index} to={route.path} className={`h4 ${route.name === props.actual ? 'text-white' : 'text-secondary'} mb-0 d-inline-block`}> {route.name} </Link>
                                ) : null
                            )}
                            <div className="d-inline-block">
                                <img src="/images/user.png" className="rounded-circle" style={{ width: '40px' }} alt="user" />
                                <button onClick={() => {
                                    localStorage.removeItem('authToken');
                                    props.history.go(0);
                                }} type="button" className="btn btn-link text-secondary mb-0"> Sair </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </>
    );
}



export default Navigation;