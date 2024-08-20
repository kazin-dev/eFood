import { TagContainer } from './styles'

export type TagProps = {
  width?: 'small' | 'big'
  children: string
}

const Tag = ({ children, width = 'small' }: TagProps) => (
  <TagContainer width={width}>{children}</TagContainer>
)

export default Tag
