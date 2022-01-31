import React, { useState } from 'react'
import Modal from 'react-modal'
import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import PlansFeatures from './PlansFeatures'
import SelectBranch from './SelectBranch'
import * as S from './Plans.styles'

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

export const Plans = (props) => {
  const { list = [] } = props

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [content, setContent] = useState(null)

  const openModal = ({ description }) => {
    setContent(description)
    // setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setContent(null)
  }



  return (
    <S.Container>
      <Modal
        isOpen={modalIsOpen}
        style={S.modalCustomStyles}
        onRequestClose={closeModal}
      >
        {content}
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
