import styled from 'styled-components'

export const Loader = styled.div`
  position: relative;
  margin: 0 auto;
  width: 50px;
  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`

export const Circular = styled.svg`
  animation: rotate 2s linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;

  & .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite,
      circularColor 6s ease-in-out infinite;
    stroke-linecap: round;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35px;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124px;
    }
  }
  @keyframes circularColor {
    100%,
    0% {
      stroke: ${({ theme }) => theme.colors.secondary};
    }
    40% {
      stroke: ${({ theme }) => theme.colors.primary};
    }
    66% {
      stroke: ${({ theme }) => theme.colors.secondary};
    }
    80%,
    90% {
      stroke: ${({ theme }) => theme.colors.primary};
    }
  }
`
