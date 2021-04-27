import { Link } from "react-router-dom";
import ICharacter from "../../interfaces/character";

const CardHero = (props: {value: ICharacter, width: string}) => {

    let {value, width} = props;
    return (
        <div className="d-inline-block cardhero-item" style={{ width }} tabIndex={1}>
            <div className="shadow position-relative">
                <img src={value.image} className="rounded d-inline-block w-100" alt="spider-man" />
                <div className="gradient-vertical-primary-transparent px-3 py-3 position-absolute rounded" style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px', left: '0px', bottom: '0px' }}>
                    <h5 className="text-center text-white h4"> {value.title} </h5>
                    <p className="text-white" style={{ height: '110px' }}>{value.text.length > 130 ? value.text.substring(0, 130) + '...' : value.text}</p>
                    <Link to={value.link} className="d-inline-block w-100 text-center text-white"> Ver detalhes </Link>
                </div>
            </div>
        </div>
    );
}
export default CardHero;