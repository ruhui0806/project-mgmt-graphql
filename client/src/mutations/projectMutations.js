import { gql } from '@apollo/client'

const ADD_PROJECT = gql`
    mutation addProject($name: String!, $description: String!, status: ProjectStatus!, clientId: ID!) {
        addProject(name: $name, description: $description, status: $status, clientId: $clientId); {
            id
            name
            description
            client{
                id
                name
                email
                phone
            }

        }
    }
`
export { ADD_PROJECT }
