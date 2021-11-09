import { Modal, ModalContent, Loader, Top, Mid, Bot } from '../styles/GameOverStyle';
import React from 'react';
import 'styled-components';

interface ModalProps { opacity: number, pointerEvents: string, }
interface GameOverProps { modal: boolean, elapsedTime: number, restartGame(): void }
const GameOverComponent:React.FC<GameOverProps> = ({ modal, elapsedTime, restartGame }) => {
  const [showModal, setShowModal] = React.useState({ opacity: 0, pointerEvents: 'auto' } as ModalProps);
  const [showLoader, setShowLoader] = React.useState('none' as string);
  const [totalTime, setTotalTime] = React.useState(0 as number);
  const [showModalContent, setShowModalContent] = React.useState( 'none' as string);
  React.useEffect(() => { 
    modal ? displayModal() : hideModal() 
    if(modal) {
      setShowLoader('inline-block')
      setTimeout(() => {
        setShowLoader('none');
        setShowModalContent('flex');
        displayModal();
      }, 3000);
    }
    if(!modal) {
      hideModal();
    }
  },[modal]);
  React.useEffect(() => { setTotalTime(elapsedTime) }, [elapsedTime]);
  const displayModal = () => setShowModal({ opacity: 1, pointerEvents: 'autp' });
  const hideModal = () => setShowModal({ opacity: 0, pointerEvents: 'none' });
  const submitScore = () => {
  }
  return (
    <Modal enablePointer={ showModal.pointerEvents } show={ showModal.opacity } >
      <Loader showLoader={ showLoader }>
        <div></div><div></div>
      </Loader>
      <ModalContent display = { showModalContent }>
        <Top>
          <p>You finished in.... { totalTime } seconds!</p>
        </Top>
        <Mid>
          <p>Please enter your username:</p>
          <input type="text" />
        </Mid>
        <Bot>
          <button onClick={() => { hideModal(); restartGame() }}>Cancel</button>
          <button onClick= { submitScore } >Submit Score</button>
        </Bot>
      </ModalContent>
    </Modal>
  )
}

export default GameOverComponent;