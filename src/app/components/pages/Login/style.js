import styled from 'styled-components'

import { color, layout } from '../../../constants/style'

export const Outer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - ${layout.headerHeight} - ${layout.footerHeight});
`

export const Box = styled.div`
  width: 300px;
  padding: 10px 20px 20px;
  border-radius: 3px;
  background-color: ${color.lightPink};
`

export const FieldList = styled.div`
  margin-bottom: 20px;
`

export const Field = styled.div`
  padding: 10px 0;
`

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${color.primary};
  font-size: 1.4rem;
  cursor: pointer;
`

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: ${color.white};
  color: ${color.gray};
  font-size: 1.2rem;
`

export const Submit = styled.input`
  display: block;
  width: 100%;
  padding: 8px 0;
  border-radius: 3px;
  background-color: ${color.primary};
  color: ${color.white};
  font-size: 1.4rem;
  text-align: center;
  cursor: pointer;

  &:hover { background-color: ${color.primary}; }
`
