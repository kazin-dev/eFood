import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  branco: '#FFEBD9',
  brancoBege: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${cores.brancoBege};
  }
`

export const Container = styled.div`
  max-width: 1088px;
  width: 100%;
  margin: 0 auto;
`
