import React from 'react'
import Link from 'next/link'

import { Header, Title } from './style'

export default ({ router }) => {
  const toHome = '/'
  const logo = (
    <Link href={toHome}>
      <a>firestore todo</a>
    </Link>
  )

  return (
    <Header>
      <Title>
        {router.pathname == toHome
        ? <h1>{logo}</h1>
        : <p>{logo}</p>
        }
      </Title>
    </Header>
  )
}
