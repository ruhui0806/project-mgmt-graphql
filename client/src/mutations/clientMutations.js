import { gql } from '@apollo/client'

const DELETE_CLIENT = gql`
    mutation deleteClient($id: ID!) {
        deleteClient(id: $id) {
            id
            name
            email
            phone
        }
    }
`

const ADD_CLIENT = gql`
    mutation addClient($newClient: AddClientInput!) {
        addClient(newClient: $newClient) {
            id
            name
    }
`

export { DELETE_CLIENT, ADD_CLIENT }
