import Header from '../../components/Header'
import ProductSection from '../../components/ProductSection'
import SimpleBannerSection from '../../components/SimpleBannerSection'
import HorizontalBannerSection from '../../components/HorizontalBannerSection'
import LateralButtons from '../../components/LateralButtons';
import Cart from '../../components/Cart';
import Main from '../../components/Main';
import ProductGrid from '../../components/ProductsGrid';
import PopUp from '../../components/PopUp';
import { PopUpContext } from '../../contexts/popUpContext';
import { useContext } from 'react';
import FoodCalcBanner from '../../components/FoodCalcBanner';
function Home() {
    const { isOpen, setIsOpen } = useContext(PopUpContext);
    return (
        <>
            {isOpen &&
                <PopUp
                    color={"#0064A2"}
                    close={() => setIsOpen(false)}
                >
                    <h1>Faça Parte da Mudança:<br /> Compre e Ajude Animais em Necessidade!</h1><p>Estamos felizes em anunciar uma nova iniciativa incrível em nosso site! A partir de agora, todas as compras que você fizer contribuirão diretamente para uma causa nobre.</p><p>Para cada compra realizada, doamos <span class="highlight">R$1,00</span> para uma instituição de ajuda animal. Isso significa que, além de adquirir produtos de qualidade, você estará ajudando animais em necessidade a receber cuidados e um lar amoroso.</p><p>Ao comprar conosco, você:</p><ul><li><span class="highlight">Apoia animais resgatados:</span> Seu R$1,00 fará a diferença no cuidado de animais que foram abandonados ou maltratados.</li><li><span class="highlight">Contribui para um mundo melhor:</span> Pequenas ações podem transformar vidas. Junte-se a nós nessa missão de amor e compaixão.</li><li><span class="highlight">Faz parte de uma comunidade solidária:</span> Cada cliente é um parceiro nessa jornada. A cada compra, você mostra que se importa e está disposto a fazer a diferença.</li></ul><h2>Como Funciona?</h2><ul><li>Faça sua compra normalmente no nosso site.</li><li>Automaticamente, R$1,00 do valor da sua compra será direcionado para a instituição de ajuda animal parceira.</li><li>Acompanhe o impacto: Periodicamente, compartilharemos atualizações sobre como suas contribuições estão ajudando os animais.</li></ul><h2>Junte-se a Nós!</h2><p>Transforme suas compras em gestos de carinho e solidariedade. Visite nosso site, explore nossos produtos e ajude a fazer um mundo melhor para os animais.</p><p>Obrigado por escolher fazer a diferença!</p>
                </PopUp>
            }
            <Cart />
            <LateralButtons />
            <Header />
            <Main>
                <ProductGrid>
                    <ProductSection id={32} tag={"NOVO"} tagTextColor={"white"} tagColor={"red"} />
                    <ProductSection id={14} tag={"POUCAS UNIDADES"} tagTextColor={"white"} tagColor={"black"} />
                </ProductGrid>
                <ProductGrid>
                    <FoodCalcBanner />
                    <SimpleBannerSection />
                    <HorizontalBannerSection />
                </ProductGrid>
            </Main>
        </>
    );
}

export default Home;