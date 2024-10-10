import ButtonLogin from "../ButtonLogin";
import InputForm from "../InputLogin";
import LoginForm from "../LoginForm";

function ContactForm() {
    return (
        <div>
            <LoginForm tittle={"Em que podemos ajudalo?"}>
                <InputForm textarea height={'200px'} label={"Mande uma mensagem, e resolveremos o seu problema"} />
                <ButtonLogin text={"Enviar mensagem"}/>
            </LoginForm>
        </div>
    );
}

export default ContactForm;