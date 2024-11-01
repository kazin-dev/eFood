import styled from 'styled-components'
import { cores } from '../../styles'

export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: ${cores.brancoBege};
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`

export const InputRow = styled.div`
  display: flex;
  gap: 30px;
  padding: 8px 0;
`

export const ExpiryContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`

export const InputInfo = styled.input`
  padding: 8px;
  width: 100%;
  border: none;
`

export const Label = styled.label`
  font-weight: 700;
  font-size: 14px;
  color: ${cores.brancoBege};
  margin: 8px 0;
`

export const ButtonForm = styled.button`
  background-color: ${cores.brancoBege};
  color: ${cores.rosa};
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
`
