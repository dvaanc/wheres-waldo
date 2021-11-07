import { Modal, ModalContent, Loader } from '../styles/GameOverStyle';
import React from 'react';
import 'styled-components';

interface ModalProps { opacity: number, pointerEvents: string, }
const GameOverComponent:React.FC = () => {
  const [showModal, setShowModal] = React.useState({ opacity: 1, pointerEvents: 'none' } as ModalProps)
  const [showLoader, setShowLoader] = React.useState('none' as string);
  return (
    <Modal enablePointer={ showModal.pointerEvents } show={ 1 } >
      <ModalContent>
        <Loader showLoader={ showLoader }>
          <div></div><div></div>
          </Loader>
          
      </ModalContent>
    </Modal>
  )
}

export default GameOverComponent;