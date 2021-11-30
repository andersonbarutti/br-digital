import { graphql } from '@project/core'
import { loader } from 'graphql.macro'

const locations = loader('./queries/locations.graphql')

export const doLoad = async () => {
  const { data: { allLocations: list = [] } = {} } = await graphql.query({
    gql: locations,
  })

  return { list }
}