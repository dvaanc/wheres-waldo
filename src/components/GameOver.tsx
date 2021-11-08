import { Modal, ModalContent, Loader, Top, Mid,  Bot} from '../styles/GameOverStyle';
import React from 'react';
import 'styled-components';

interface ModalProps { opacity: number, pointerEvents: string, }
interface GameOverProps { modal?: boolean }
const GameOverComponent:React.FC<GameOverProps> = ({ modal }) => {
  const [showModal, setShowModal] = React.useState({ opacity: 0, pointerEvents: 'auto' } as ModalProps);
  const [showLoader, setShowLoader] = React.useState('none' as string);
  const [totalTime, setTotalTime] = React.useState(0 as number);
  React.useEffect(() => {
    if(modal) displayModal();
  },[modal])
  const displayModal = () => setShowModal({ opacity: 1, pointerEvents: 'autp' });
  const hideModal = () => setShowModal({ opacity: 0, pointerEvents: 'none' });
  const submitScore = () => {

  }
  return (
    <Modal enablePointer={ showModal.pointerEvents } show={ showModal.opacity } >
      <ModalContent>
        <Loader showLoader={ showLoader }>
          <div></div><div></div>
          </Loader>
          <Top>
            <p>You finished in.... { totalTime }s!</p>
          </Top>
          <Mid>
            <p>Please enter your username:</p>
            <input type="text" />
          </Mid>
          <Bot>
            <button onClick={ hideModal }>Cancel</button>
            <button onClick= { submitScore } >Submit Score</button>
          </Bot>
      </ModalContent>
    </Modal>
  )
}

export default GameOverComponent;