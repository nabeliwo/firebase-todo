import styled from 'styled-components'

import { color, layout } from '../../../constants/style'

export const Header = styled.header`
  display: flex;
  height: ${layout.headerHeight};
  align-items: center;
  padding: 0 10px;
  background-color: ${color.purple};
`

export const Title = styled.div`
  color: ${color.white};
  font-weight: bold;
  font-size: 1.8rem;

  a:hover { opacity: .7; }
`
