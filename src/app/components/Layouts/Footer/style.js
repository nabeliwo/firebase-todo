import styled from 'styled-components'

import { color, layout } from '../../../constants/style'

export const Footer = styled.footer`
  display: flex;
  height: ${layout.footerHeight};
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  background-color: ${color.primary};
`

export const Copy = styled.p`
  color: ${color.white};
  font-size: 1.2rem;
`
