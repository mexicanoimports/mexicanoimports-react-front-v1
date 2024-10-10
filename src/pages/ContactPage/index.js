import Cart from "../../components/Cart";
import ContactForm from "../../components/ContactForm";
import Header from "../../components/Header";
import LateralButtons from "../../components/LateralButtons";
import Main from "../../components/Main";

function ContactPage() {
    return (
        <>
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ContactForm />
            </Main>
        </>
    );
}

export default ContactPage;