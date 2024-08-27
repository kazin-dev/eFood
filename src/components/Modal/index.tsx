import {
  Overlay,
  ModalContent,
  BotaoModal,
  Card,
  CardContainer,
  DescricaoCard,
  Info,
  TituloCard,
  CardIMG,
  CloseButton
} from './styles'

import excluir from '../../assets/images/close 1.png'

type Props = {
  titulo: string
  descricao: string
  Imagem: string
  informacao: string
  onButtonClick: () => void
  onClose: () => void
}

const CardModal = ({
  titulo,
  descricao,
  onButtonClick,
  Imagem,
  informacao,
  onClose
}: Props) => (
  <>
    <Overlay />
    <ModalContent>
      <Card>
        <CloseButton onClick={onClose}>
          <img src={excluir} alt="Fechar" />
        </CloseButton>
        <CardIMG src={Imagem} alt="Pizza" />
        <CardContainer>
          <TituloCard>{titulo}</TituloCard>
          <DescricaoCard>{descricao}</DescricaoCard>
          <Info>{informacao}</Info>
          <BotaoModal onClick={onButtonClick}>
            Adicionar ao carrinho - R$ 60,90
          </BotaoModal>
        </CardContainer>
      </Card>
    </ModalContent>
  </>
)

export default CardModal
