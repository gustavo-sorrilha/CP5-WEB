import React from 'react'

import './css/style.css'

export default function Produto({ imagem, nomeProduto, preco }) {
  return (
    <div className="produto">
      <img src={imagem} alt={imagem} />
      <p>{nomeProduto}</p>
      <span>{preco}</span>
    </div>
  )
}
