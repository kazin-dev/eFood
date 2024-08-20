import { styled } from 'styled-components'
import { TagProps } from '.'
import { cores } from '../../styles'

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  top: 8px;
  right: 8px;
`

export const TagContainer = styled.span<TagProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.width === 'big' ? '121px' : '61px')};
  height: 26px;
  background-color: ${cores.rosa};
  color: ${cores.branco};

  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 14.06px;
`
