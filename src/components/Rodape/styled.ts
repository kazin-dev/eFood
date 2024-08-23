import { styled } from 'styled-components'
import { cores } from '../../styles'

export const Rodape = styled.footer`
  width: 100%;
  height: 298px;
  padding: 40px 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  background-color: ${cores.branco};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* Reduzi o espaçamento para caber melhor */
  padding-top: 32.5px;
`

export const ListaLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1; /* Garantir que os links fiquem sobre o logo */
`

export const Links = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Link = styled.a``

export const FooterText = styled.p`
  text-align: center;
  font-size: 10px;
  max-width: 600px;
  margin-top: 40px; /* Ajustado para dar mais espaço ao texto */
  line-height: 11.72px;
  font-weight: 400;
  color: ${cores.rosa};
`
