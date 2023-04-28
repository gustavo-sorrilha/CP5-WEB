import tenis1 from '../assets/chuteira1.webp';
import tenis2 from '../assets/chuteira2.webp';
import tenis3 from '../assets/chuteira3.webp';
import tenis4 from '../assets/Jordan.webp';
import tenis5 from '../assets/Naldo.webp';
import tenis6 from '../assets/Nike.webp';

import Produto from '../components/Produto';

import '../components/css/style.css'

function Tênis() {
    return (
        <main>
            <div className="tenis">
                <Produto imagem={tenis1} nomeProduto="Chuteira CR7" preco="R$ 300,00" />
                <Produto imagem={tenis2} nomeProduto="Chuteira Adidas" preco="R$ 209,90" />
                <Produto imagem={tenis3} nomeProduto="Chuteira Puma" preco="R$ 250,00" />
                <Produto imagem={tenis4} nomeProduto="Tênis Air Jordan" preco="R$ 500,00" />
                <Produto imagem={tenis5} nomeProduto="Tênis Air Naldo (Raro)" preco="R$ 10.000,90" />
                <Produto imagem={tenis6} nomeProduto="Tênis Nike Lebron" preco="R$ 450,50" />
            </div>
        </main>
    )
}
export default Calçados