// import { graphql } from '@project/core'
// import { loader } from 'graphql.macro'

// const locations = loader('./queries/locations.graphql')

export const doLoad = async () => {
  // const { data: { allLocations } = {} } = await graphql.query({
  //   gql: locations,
  // })

  // const list = allLocations.map(location => ({
  //   ...location,
  //   slug: location.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s/g, '-')
  // }))

  return { list: [] }
}