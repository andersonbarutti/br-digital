import { graphql } from '@project/core'
import { loader } from 'graphql.macro'

const plans = loader('./queries/plans.graphql')

export async function doLoad(props) {
  const { location: { list: allLocations = [] } = {}, slug } = props

  const location = allLocations.find(location => location.slug === slug)

  if (!location) {
    return { list: [null] }
  }

  const variables = {
    locationAcronym: location.acronym,
  }

  const shortDescriptionList = [
    'Acesso apenas a academia escolhida',
    'Acesso em ALGUMAS academias',
    'Acesso em TODAS as academias',
  ] 

  console.log(plans, variables)

  const { data: { allPlans }} = await graphql.query({
    gql: plans,
    variables,
  })

  const list = allPlans.map(plan => ({
    ...plan,
    shortDescription: shortDescriptionList[Math.floor(Math.random() * shortDescriptionList.length)]
  }))

  return { list }
}