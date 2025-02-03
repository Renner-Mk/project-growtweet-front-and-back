import { ContainerModal, Modal, TextArea } from './styles'
import { IoClose } from 'react-icons/io5'

export function ModalTweet() {
  return (
    <ContainerModal>
      <Modal>
        <div>
          <IoClose size={22} className="close" />
        </div>
        <form action="">
          <TextArea
            name=""
            id="text"
            placeholder="O que está acontecendo?"
          ></TextArea>
          <button type="submit">Tweetar</button>
        </form>
      </Modal>
    </ContainerModal>
  )
}
