import { Modal, ModalContent, Loader, Top, Mid, Bot } from '../styles/GameOverStyle';
import React from 'react';
import { submitUserScore } from './firebase';
import 'styled-components';

interface ModalProps { opacity: number, pointerEvents: string, }
interface GameOverProps { modal: boolean, elapsedTime: number, restartGame(): void }
const GameOverComponent:React.FC<GameOverProps> = ({ modal, elapsedTime, restartGame }) => {
  const [showModal, setShowModal] = React.useState({ opacity: 0, pointerEvents: 'auto' } as ModalProps);
  const [showLoader, setShowLoader] = React.useState('none' as string);
  const [totalTime, setTotalTime] = React.useState(0 as number);
  const [showModalContent, setShowModalContent] = React.useState( 'none' as string);
  const [user, setUser] = React.useState('' as string)
  React.useEffect(() => { 
    if(modal) {
      displayModal();
      setShowLoader('inline-block');
      setTimeout(() => {
        setShowLoader('none');
        setShowModalContent('flex');
      }, 3000);
    }
    if(!modal) hideModal();
  },[modal]);
  React.useEffect(() => { setTotalTime(elapsedTime) }, [elapsedTime]);
  const displayModal = () => setShowModal({ opacity: 1, pointerEvents: 'autp' });
  const hideModal = () => setShowModal({ opacity: 0, pointerEvents: 'none' });
  const submitScore = () => {
    if(user === '') return 
    if(user !== '') {
      submitUserScore(user, totalTime);
      reset();
    }

  }
  const handleChange = (e: React.ChangeEvent): void => {
    const target = e.target as HTMLInputElement;
    setUser(target.value);
  }
  const reset = (): void => {
    hideModal(); 
    setShowModalContent('none');
    setShowLoader('none');
    restartGame();
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
          <input type="text"value={ user }  onChange={ handleChange }/>
        </Mid>
        <Bot>
          <button onClick={ reset }>Restart</button>
          <button onClick= { submitScore }>Submit Score</button>
        </Bot>
      </ModalContent>
    </Modal>
  )
}

export default GameOverComponent;