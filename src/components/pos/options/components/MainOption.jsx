import React,{useState} from 'react'
import styled from 'styled-components'
import Modal from '../../../utils/Modal/Modal';
import { OrderOptionForModal } from './OrderOptionForModal';

const MainOption = () => {
  const [modalOpen,setModalOpen] = useState();

  const closeHandler = () => {
    setModalOpen(null)
  }

  const openHandler = () => {
    setModalOpen(true)
  }
  return (
    <>
    <Options onClick={openHandler}>
      <h5>Main Options</h5>
    </Options>
    {modalOpen&&<Modal
      title={'Main Options'}
      element={<OrderOptionForModal />}
      onClose={closeHandler}
      />}
    </>
  )
}

export default MainOption


const Options = styled.div`
  height: 400px;
  background: white;
  border-radius: 20px;
  padding-top: 50px;
  box-shadow: 0px 0px 6px 0px rgba(122, 119, 119, 0.75);
  h5 {
    color: #040153;
  }
`;