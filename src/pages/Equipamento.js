import Equipamento from '../components/Equipamento';
import Produto from '../components/Produto';
import '../components/css/style.css';

import bola from '../assets/bola.webp';
import skate from '../assets/skate.webp';
import luva from '../assets/luva.webp';
import tenis from '../assets/tenis.webp';
import raquete from '../assets/raquete.webp';
import bicicleta from '../assets/bicicleta.webp';

function Equipamentos() {
  return (
    <main>
      <div className="equipamentos">
        <Produto imagem={bola} nomeProduto="Bola de Futebol" preco="R$ 99,90" />
        <Produto imagem={skate} nomeProduto="Skate Completo" preco="R$ 399,90" />
        <Produto imagem={luva} nomeProduto="Luvas de Boxe" preco="R$ 149,00" />
        <Produto imagem={tenis} nomeProduto="Tênis para Corrida" preco="R$ 279,00" />
        <Produto imagem={raquete} nomeProduto="Raquete de Tênis" preco="R$ 189,90" />
        <Produto imagem={bicicleta} nomeProduto="Bicicleta Mountain Bike" preco="R$ 2.499,00" />
      </div>
      <Equipamento />
    </main>
  );
}

export default Equipamentos;
