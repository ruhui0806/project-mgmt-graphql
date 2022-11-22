import { gql, useQuery } from '@apollo/client'
import ClientRow from './ClientRow'
import { GET_CLIENTS } from '../queries/clientQueries'

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS)
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error!</div>
    return (
        <>
            {/* <p>client</p> */}
            {!loading && !error && (
                <table className="table table-hover mt-3">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.clients.map((client) => (
                            <ClientRow key={client.id} client={client} />
                        ))}
                    </tbody>
                </table>
            )}
        </>
    )
}

export default Clients
