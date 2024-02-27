import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  margin-bottom: 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 40px;
`

export const Nome = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const DetalhesContato = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 12px;

  input {
    padding: 8px;
    margin-top: 12px;
    display: block;
  }
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
