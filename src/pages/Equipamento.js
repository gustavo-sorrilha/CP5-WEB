import React, { useEffect } from "react"
import { useForm } from 'react-hook-form'
import { useState } from 'react'

export default function Equipamento(){
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

        fetch(`https://viacep.com.br/ws/${formattedCep}/json/`)
          .then(res => res.json())
          .then(data => {
            setLoading(true);
            setData(data);
            if (data.uf === 'sp') setFrete("R$ 00,00");
            else setFrete("R$ 50,00");
          }).finally(() => setLoading(false))
      }

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
  }