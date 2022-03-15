import Head from 'next/head'
import { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Diego Silva (d1eshi)" />
        <meta name="description" content={`Información del pokemon ${title}`} />
        <meta name="keywords" content={`${title}, pokemon, pokedex`} />
      </Head>

      <Navbar />

      <main
        style={{
          padding: '0px 1rem',
        }}
      >
        {children}
      </main>
    </>
  )
}
