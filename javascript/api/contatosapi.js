'use strict'

export const pegarListaDeCursosApi = async () => {
    const url = `https://jolly-fox-jacket.cyclic.app/v1/lion-school/cursos`
    const response = await fetch(url)
    const data = await response.json()
    const array = []
    array.push(data)
    
    return array
}