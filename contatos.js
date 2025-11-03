'use strict'

async function lerContatos(){
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch (url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method:"POST",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }
    
    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

async function deletarContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"DELETE"
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok 
}

async function atualizarContato(id, contato){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"PUT",
        headers:{
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }
    
    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

const novoContato = {
        "nome": "Arthur Angelus",
        "celular": "11 9 7167-6489",
        "foto": "semFoto.png",
        "email": "art@gmail.com",
        "endereco": "Av. São Pedro vasconselhos, 154",
        "cidade": "Niteroi"
}

lerContatos()
criarContato(novoContato)
atualizarContato(4, novoContato)
deletarContato()
