'use strict'

export const pegarListaDeAlunosMatriculaApi = async (matriculaAluno) => {
    const url = `https://jolly-fox-jacket.cyclic.app/v1/lion-school/alunos/${matriculaAluno}`
    const response = await fetch(url)
    const data = await response.json()
   
    return data
}