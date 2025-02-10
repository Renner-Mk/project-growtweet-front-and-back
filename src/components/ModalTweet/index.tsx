import { ContainerModal, Modal, TextArea } from './styles'
import { IoClose } from 'react-icons/io5'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ModalTweet({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null
  return (
    <ContainerModal>
      <Modal>
        <div>
          <IoClose size={22} className="close" onClick={onClose} />
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
