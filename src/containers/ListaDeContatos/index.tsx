import { useSelector } from 'react-redux'
import Contato from '../../Components/Contato'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <div>
      <ul>
        {itens.map((c) => (
          <li key={c.nome}>
            <Contato
              id={c.id}
              nome={c.nome}
              email={c.email}
              numero={c.numero}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ListaDeContatos
