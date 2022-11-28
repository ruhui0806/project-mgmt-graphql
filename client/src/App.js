import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Clients from './components/Clients'
import Projects from './components/Projects'
import AddClientModal from './components/AddClient'
import AddProjectModal from './components/AddProject'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
})

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header />
                <div className="container gap-2 fluid d-inline-flex mb-3">
                    <AddClientModal />
                    <AddProjectModal />
                </div>
                <>
                    <Projects />
                    <Clients />
                </>
            </ApolloProvider>
        </>
    )
}

export default App
