import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import PlansFeatures from './PlansFeatures'
import SelectBranch from './SelectBranch'
import Ghost from './Ghost'
import * as S from './Plans.styles'
import CloseIcon from './assets/close.png'

SwiperCore.use([Navigation])

const navigation = {
  nextEl: '.swiper-next',
  prevEl: '.swiper-prev',
}

const breakpoints ={
  0: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  1190: {
    slidesPerView: 3,
    spaceBetween: 40
  }
}

export const Plans = props => {
  const { list = [], load, slug } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [content, setContent] = useState(null)

  useEffect(() => {
    load(props)
    // eslint-disable-next-line
  }, [slug])

  const openModal = ({ description }) => {
    setContent(description.replace(/##QUEBRAR##/g, ''))	
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setContent(null)
  }

  if (!list.length) {
    return <Ghost />
  }

  return (
    <S.Container>
      <Modal
        isOpen={modalIsOpen}
        contentElement={(props, children) => <S.Modal {...props}>{children}</S.Modal>}
        overlayElement={(props, children) => <S.Overlay {...props}>{children}</S.Overlay>}
        onRequestClose={closeModal}
      >
        <S.ModalContainer>
          <S.ModalHeader>
            <S.ModalTitle>
              Regulamento
            </S.ModalTitle>
            <S.ModalClose onClick={closeModal}>
              <img src={CloseIcon} alt='Close' />
            </S.ModalClose>
          </S.ModalHeader>
          <S.ModalBody>
            <S.ModalContent>
              {content}
            </S.ModalContent>
          </S.ModalBody>
        </S.ModalContainer>
      </Modal>
      <S.Header>
        <S.Content>
          <S.Selector>
            <SelectBranch />
          </S.Selector>
          <S.List>
            <S.Prev />
            <Swiper slidesPerView={3} spaceBetween={40} pagination={{
              'clickable': true
            }} breakpoints={breakpoints} className='swiper' navigation={navigation}>
              {list.map(item => (
                <SwiperSlide>
                  <S.Item key={item.id}>
                    <S.Resume>
                      <S.PlanType>{item.displayName}</S.PlanType>
                      <S.Price><span>R$</span><strong>{item.price}</strong></S.Price>
                      <S.Description>{item.shortDescription}</S.Description>
                      <S.Button>Compre aqui</S.Button>
                      <S.Contract onClick={() => openModal(item)}>Consulte o regulamento</S.Contract>
                    </S.Resume>
                    <S.Footer>
                      {item.bestSeller && <S.Highlight>
                        <span>O plano mais vendido!</span>
                      </S.Highlight>}
                    </S.Footer>
                  </S.Item>
                </SwiperSlide>
              ))}
            </Swiper>
            <S.Next />
          </S.List>
        </S.Content>
      </S.Header>
      <PlansFeatures />
    </S.Container>
  )
}

export default Plans
