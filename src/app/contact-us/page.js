import style from "./page.module.css"
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import Textarea from "../../components/Textarea/Textarea";

export default function ContactUsPage() {
    return (
        <div>
            <Header />
            <div className={style.main}>
                <div className={style.blurFrame}>
                    <img src="/contact_us_1.png"></img>
                    <img src="/contact_us_2.png"></img>
                </div>
                <div className={style.frame}>
                    <h2>Contact us</h2>
                    <Input placeholder="Name"/>
                    <Input placeholder="Email adress"/>
                    <Textarea placeholder="Message"/>
                    <Button>Submit</Button>
                </div>
            </div>
        </div>
    );
}