import React from 'react'
import PlansFeatures from './PlansFeatures'
import { SelectBranch } from './SelectLocation'

import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// swiper bundle styles
import 'swiper/swiper-bundle.min.css'

// swiper core styles
import 'swiper/swiper.min.css'

// modules styles
// import 'swiper/components/navigation/navigation.min.css'
// import 'swiper/components/pagination/pagination.min.css'

import * as S from './Plans.styles'

const list = [
  { id: 1, title: '', price: '287,00', description: 'Acesso apenas a academia escolhida', favorite: true },
  { id: 2, title: '', price: '345,00', description: 'Acesso em ALGUMAS academias' },
  { id: 3, title: '', price: '456,00', description: 'Acesso em TODAS as academias' },
  { id: 4, title: '', price: '678,00', description: 'Acesso em TODAS as academias' },
  { id: 4, title: '', price: '678,00', description: 'Acesso em TODAS as academias' },
  { id: 4, title: '', price: '678,00', description: 'Acesso em TODAS as academias' },
  { id: 4, title: '', price: '678,00', description: 'Acesso em TODAS as academias' },
  { id: 4, title: '', price: '678,00', description: 'Acesso em TODAS as academias' },
]

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

export const Plans = () => (
  <S.Container>
    <S.Header>
      <S.Content>
        <S.Selector>
          <SelectBranch title='Unidade selecionada: PAULISTA' />
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
                    <S.PlanType>Plano recorrente</S.PlanType>
                    <S.Price><span>R$</span><strong>{item.price}</strong></S.Price>
                    <S.Description>{item.description}</S.Description>
                    <S.Button>Compre aqui</S.Button>
                    <S.Contract>Consulte o regulamento</S.Contract>
                  </S.Resume>
                  <S.Footer>
                    {item.favorite && <S.Highlight>
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

export default Plans
