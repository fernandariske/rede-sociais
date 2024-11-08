async function quantidadedeUsuarios(params) {
    const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json' 

const res = await fetch(url)
const dados = await res.json()

    console.log(dados)
    const nomedasredes = Object.keys(dados)
    const quantidadedeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomedasredes,
            x: quantidadedeUsuarios,
            type: 'bar'
        }
    ]

    const grafico =document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    plotly.newplot(grafico,data)
    
}
quantidadedeUsuarios()
