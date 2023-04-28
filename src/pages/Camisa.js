import { useState, useEffect } from 'react';
import camisa1 from '../assets/camisa1.webp';
import camisa2 from '../assets/camisa2.webp';
import camisa3 from '../assets/camisa3.webp';
import camisa4 from '../assets/camisa4.webp';
import camisa5 from '../assets/camisa5.webp';
import camisa6 from '../assets/camisa6.webp';

import Produto from '../components/Produto';

import '../components/css/style.css';

function Camisetas() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState({});
  const [frete, setFrete] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkCep = async () => {
      const formattedCep = cep.replace(/\D/g, '');

      fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          setLoading(true);
          setData(data);
          if (data.uf === 'sp') setFrete('R$ 00,00');
          else setFrete('R$ 35,00');
        })
        .finally(() => setLoading(false));
    };

    if (cep.length === 8) {
      checkCep();
    }
  }, [cep]);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };

  return (
    <main>
      <div>
        <h3>Informe o CEP para calcular o frete:</h3>
        <input type="text" value={cep} onChange={handleCepChange} />
        {loading && <p>Carregando...</p>}
        {frete && <p>Frete: {frete}</p>}
      </div>
      <div className="camisetas">
        <Produto imagem={camisa1} nomeProduto="Camiseta Puma Palmeiras" preco="R$ 350,90" />
        <Produto imagem={camisa2} nomeProduto="Camiseta PSG" preco="R$ 350,00" />
        <Produto imagem={camisa3} nomeProduto="Camiseta Roma" preco="R$ 350,00" />
        <Produto imagem={camisa4} nomeProduto="Camiseta Man.City" preco="R$ 350,00" />
        <Produto imagem={camisa5} nomeProduto="Camiseta Real Madrid" preco="R$ 350,00" />
        <Produto imagem={camisa6} nomeProduto="Camiseta Atl.Madrid" preco="R$ 350,00" />
      </div>
    </main>
  );
}

export default Camisetas;
