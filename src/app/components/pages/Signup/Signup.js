import React from 'react'
import Link from 'next/link'

import Layout from '../../Layouts/Wrapper/'
import { Outer, Form, FieldList, Field, Label, Input, Submit } from './style'

export default ({ onSubmit }) => (
  <Layout>
    <Outer>
      <div>
        <Form onSubmit={onSubmit}>
          <FieldList>
          <Field>
              <Label htmlFor="signup_name">ユーザー名</Label>
              <Input type="text" id="signup_name" name="signup_name" required />
            </Field>
            <Field>
              <Label htmlFor="signup_email">メールアドレス</Label>
              <Input type="email" id="signup_email" name="signup_email" required />
            </Field>
            <Field>
              <Label htmlFor="signup_password">パスワード</Label>
              <Input type="password" id="signup_password" name="signup_password" required />
            </Field>
          </FieldList>
          <Submit type="submit" value="新規登録" />
        </Form>
        <p>
          <Link href="/login"><a>ログインはこちら</a></Link>
        </p>
      </div>
    </Outer>
  </Layout>
)
