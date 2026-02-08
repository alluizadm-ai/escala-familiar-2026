"use client"
import { useState } from "react"

const filhos = [
  "Eduardo",
  "André",
  "Nivaldo",
  "Everaldo",
  "Ronaldo",
  "Márcio"
]

function gerarEscala() {
  const inicio = new Date(2026, 1, 14)
  const fim = new Date(2026, 11, 31)
  const escala = []

  let data = new Date(inicio)
  let contador = 0

  while (data <= fim) {
    const domingo = new Date(data)
    domingo.setDate(domingo.getDate() + 1)

    escala.push({
      mes: data.toLocaleString("pt-BR", { month: "long" }),
      sabado: data.toLocaleDateString("pt-BR"),
      domingo: domingo.toLocaleDateString("pt-BR"),
      responsavel: filhos[contador % filhos.length]
    })

    data.setDate(data.getDate() + 7)
    contador++
  }

  return escala
}

export default function Home() {
  const [escala, setEscala] = useState(gerarEscala())

  const atualizar = (index, novo) => {
    const nova = [...escala]
    nova[index].responsavel = novo
    setEscala(nova)
  }

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Escala Familiar 2026</h1>

      {escala.map((item, i) => (
        <div key={i} style={{ marginBottom: 10, borderBottom: "1px solid #ddd", paddingBottom: 8 }}>
          <div><strong>Mês:</strong> {item.mes}</div>
          <div><strong>Sábado:</strong> {item.sabado}</div>
          <div><strong>Domingo:</strong> {item.domingo}</div>
          <input
            value={item.responsavel}
            onChange={(e) => atualizar(i, e.target.value)}
            style={{ marginTop: 5 }}
          />
        </div>
      ))}
    </div>
  )
}
