import { gql } from '@apollo/client'
import client from './apollo-client'
import { IGetAllCharacters } from './types'

export const getAllCharacteres = async () => {
  const { data } = await client.query<IGetAllCharacters>({
    query: gql`
      query {
        characters(page: 1) {
          info {
            count
            next
            prev
          }
          results {
            id
            name
            status
            species
            type
            gender
            image
            created
          }
        }
      }
    `
  })

  return {
    characters: data.characters.results,
    info: data.characters.info
  }
}

//   useQuery({
//     query: `query Alias ($page: Int!) {
//     characters(page: $page) {
//       info {
//         count
//       }
//       results {
//         id name status species type gender origin location image episode url created
//       }
//     }
//   }`,
//   variables: {
//     page: currentPage
//   }
//   });
