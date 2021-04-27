import IAvailable from "./available";

export default interface ICharacter {
    id: number;
    image: string;
    title: string;
    text: string;
    link: string;
    stars: number;
    available: Array<IAvailable>;
}