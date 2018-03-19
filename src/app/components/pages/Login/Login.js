import React from 'react'

import Wrapper from '../../Layouts/Wrapper/'
import { Outer, Box, FieldList, Field, Label, Input, Submit } from './style'

export default ({ onSubmit }) => (
  <Wrapper>
    <Outer>
      <Box>
        <form onSubmit={onSubmit}>
          <FieldList>
            <Field>
              <Label htmlFor="login_email">メールアドレス</Label>
              <Input type="email" id="login_email" name="login_email" />
            </Field>
            <Field>
              <Label htmlFor="login_password">パスワード</Label>
              <Input type="password" id="login_password" name="login_password" />
            </Field>
          </FieldList>
          <Submit type="submit" value="ログイン" />
        </form>
      </Box>
    </Outer>
  </Wrapper>
)
