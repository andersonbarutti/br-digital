// import { graphql } from '@project/core'
import { loader } from 'graphql.macro'

const plans = loader('./queries/plans.graphql')

export async function doLoad() {

  const variables = {
    locationAcronym: 'PTA'
  }

  console.log(plans, variables)

  const allPlans = []

  // const { data: { allPlans }} = await graphql.query({
  //   gql: plans,
  //   variables,
  // })

  return { list: allPlans }
}