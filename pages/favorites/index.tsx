import React from 'react'
import { Layout } from '../../components/layouts'
import { FavotitePokemons } from '../../components/pokemon'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = React.useState<number[]>([])

  React.useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavotitePokemons pokemons={favoritePokemons} />
      )}
    </Layout>
  )
}

export default FavoritesPage
