import style from "./page.module.css"
import Header from "../../components/Header/Header";

export default function AboutUsPage() {
    return (
        <div className={style.page}>
            <Header />
            <div className={style.main}>
                <h2>About us</h2>
                <p>Mol4un - is a solo beginner web developer who is creating this site for his GitHub 🙂</p>
                <img src="/about_us.png"></img>
            </div>
        </div>
    );
}