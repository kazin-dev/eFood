import styled from 'styled-components'
import { cores } from '../../styles' // Importando cores se necessário

export const Banner = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

export const BannerInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${cores.branco}; /* Ajuste a cor do texto conforme necessário */
  text-align: center;
  padding: 20px; /* Adiciona algum espaço interno se necessário */
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Fundo semi-transparente para melhor legibilidade do texto */
  border-radius: 8px; /* Opcional: arredonda os cantos do fundo */
`

export const Card = styled.div`
  width: 100%; /* Ajuste conforme necessário */
  max-width: 500px; /* Ajuste conforme necessário */
  background-color: ${cores.branco}; /* Ajuste a cor de fundo conforme necessário */
  border: 1px solid ${cores.rosa}; /* Adiciona uma borda rosa ao redor do card */
  border-radius: 8px; /* Opcional: arredonda os cantos do card */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adiciona sombra ao card */
  overflow: hidden; /* Garante que o conteúdo não ultrapasse os limites do card */
  margin: 20px auto; /* Centraliza o card horizontalmente e adiciona espaçamento */
`

export const CardInfo = styled.div`
  padding: 16px; /* Adiciona algum espaço interno ao CardInfo */
  text-align: center; /* Centraliza o texto dentro do CardInfo */
`
