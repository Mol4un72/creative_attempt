import Header from "../../../components/Header/Header";
import Card from "../../../components/Card/Card";
import style from "./page.module.css"

const arts = [
    {id: 1, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 2, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 3, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 4, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 5, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 6, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 7, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 8, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 9, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 10, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 11, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 12, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
]

export default async function CardPage({ params }) {
    const { id } = await params;

    const art = arts.find((a) => a.id == id);

    if (!art) {
        return (
            <div>
                <Header />
                <h2>Not found</h2>
            </div>
        );
    }

    return (
        <div className={style.page}>
            <Header />
            <Card variant="full" art={art} />
        </div>
    );
}