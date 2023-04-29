import React, { useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

const Equipamento = () => {
  const { register, handleSubmit } = useForm();
  const [frete, setFrete] = useState('R$0.00');
  const [cep, setCep] = useState('');
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => setCep(e.cep);

  useEffect(() => {
    const checkCep = async () => {
      const formattedCep = cep.replace(/\D/g, '');
      console.log(formattedCep);

      try {
        setLoading(true);
        const response = await fetch(`https://viacep.com.br/ws/${formattedCep}/json/`);
        const data = await response.json();
        setData(data);
        setFrete(data.uf === 'sp' ? 'R$ 0,00' : 'R$ 35,00');
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkCep();
  }, [cep]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Consumindo uma API</h1>

      <fieldset>
        <label htmlFor="cep">Informe seu CEP:</label>
        <input type="text" name="cep" {...register("cep")} />
      </fieldset>

      {!!data.localidade && (
        <>
          <p>Valor do frete: {frete}</p>
          <p>Estado: {data.localidade}</p>
          <p>Rua: {data.logradouro}</p>
          <p>Bairro: {data.bairro}</p>
        </>
      )}

      <button type="submit" id="enviar">{loading ? "Carregando ..." : "Enviar"}</button>
    </form>
  );
};

export default Equipamento;

