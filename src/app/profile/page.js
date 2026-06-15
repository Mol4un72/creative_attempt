import style from "./page.module.css"
import Header from "../../components/Header/Header"
import Card from "../../components/Card/Card"

const arts = [
    {id: 1, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 2, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 3, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 4, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 5, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 6, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 7, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 1, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 2, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 3, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 4, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 5, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 6, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
    {id: 7, name: "Gigachad", price: 1000, time: 1000, image: "/img.png"},
]

const achievements = [
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
    {name: "introduction", rarity: "legendary", image: "/apple_icon.svg"},
]

export default function Profile() {
    return (
        <div className={style.page}>
            <Header />
            <div className={style.header}>
                <div className={style.leftSide}>
                    <img className={style.avatar}></img>
                    <span className={style.nickname}>
                        Nickname
                        <img className={style.settingsImg} src="/settings.svg"></img>
                    </span>
                </div>
                <div className={style.achievements}>
                    {achievements
                    .map((ach, index) => (
                        <img key={index} className={style.achievement} src={ach.image}></img>
                    ))
                }
                </div>
            </div>
            <div className={style.cards}>
                {arts
                  .filter((art) => art.image)
                  .map((art) => (
                    <Card key={art.id} art={art} />
                ))}
            </div>
        </div>
    );
}