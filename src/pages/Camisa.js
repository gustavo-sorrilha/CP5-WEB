import camisa1 from '../assets/camisa1.webp';
import camisa2 from '../assets/camisa2.webp';
import camisa3 from '../assets/camisa3.webp';
import camisa4 from '../assets/camisa4.webp';
import camisa5 from '../assets/camisa5.webp';
import camisa6 from '../assets/camisa6.webp';

import Produto from '../components/Produto';

import '../components/css/style.css'

function Camisetas(){

    return (
        <main>
            <div className="camisetas">
                <Produto imagem={camisa1} nomeProduto="Camiseta Puma Palmeiras" preco="R$ 350,90" />
                <Produto imagem={camisa2} nomeProduto="Camiseta PSG" preco="R$ 350,00" />
                <Produto imagem={camisa3} nomeProduto="Camiseta Roma" preco="R$ 350,00" />
                <Produto imagem={camisa4} nomeProduto="Camiseta Man.City" preco="R$ 350,00" />
                <Produto imagem={camisa5} nomeProduto="Camiseta Real Madrid" preco="R$ 350,00" />
                <Produto imagem={camisa6} nomeProduto="Camiseta Atl.Madrid" preco="R$ 350,00" />
            </div>
        </main>
    )
}
export default Camisetas