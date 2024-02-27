import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BarraAcoes,
  Botao,
  BotaoCancelarRemover,
  BotaoSalvar,
  Card,
  DetalhesContato,
  Nome
} from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const Contato = ({
  nome,
  email: emailOriginal,
  numero: numeroOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [numero, setNumero] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (numeroOriginal.length > 0 && emailOriginal.length > 0) {
      setNumero(numeroOriginal), setEmail(emailOriginal)
    }
  }, [numeroOriginal, emailOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setNumero(numeroOriginal)
    setEmail(emailOriginal)
  }

  return (
    <Card>
      <Nome>{nome}</Nome>
      <DetalhesContato>
        <input
          disabled={!estaEditando}
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
        />
        <input
          disabled={!estaEditando}
          value={numero}
          onChange={(evento) => setNumero(evento.target.value)}
        />
      </DetalhesContato>
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    numero,
                    email
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}

export default Contato
