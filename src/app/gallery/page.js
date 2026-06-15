import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Link from "next/link";

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

export default function GalleryPage() {
    return (
        <div>
            <Header />
            <div className={styles.list}>
                {arts
                  .filter((art) => art.image)
                  .filter((art) => art.name)
                  .map((art) => (
                    <Link key={art.id} href={`/gallery/${art.id}`}>
                        <Card variant="default" key={art.id} art={art} />
                    </Link>
                ))}
            </div>
        </div>
    );
}