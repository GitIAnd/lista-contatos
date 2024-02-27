import { FormEvent, useState } from 'react'
import { BotaoSalvar } from '../../Components/Contato/styles'
import { Campo, MainContainer } from './styles'
import { useDispatch } from 'react-redux'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nome, email, numero, 9)

    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <h1>Novo Contato</h1>
      <form onSubmit={cadastrarContato}>
        <Campo
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email"
        />
        <Campo
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
          type="text"
          placeholder="Número"
        />
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </form>
    </MainContainer>
  )
}

export default Formulario
