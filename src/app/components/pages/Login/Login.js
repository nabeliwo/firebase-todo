import React from 'react'
import Link from 'next/link'

import Layout from '../../Layouts/Wrapper/'
import { Outer, Form, FieldList, Field, Label, Input, Submit } from './style'

export default ({ user, onSubmit }) => (
  <Layout user={user}>
    <Outer>
      <div>
        <Form onSubmit={onSubmit}>
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
        </Form>
        <p>
          <Link href="/signup"><a>新規登録はこちら</a></Link>
        </p>
      </div>
    </Outer>
  </Layout>
)
