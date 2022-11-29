import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Header from './components/Header'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Project from './pages/Project'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql',
    cache: new InMemoryCache(),
})

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Router>
                    <Header />
                    <div className="container gap-2 fluid d-inline-flex mb-3">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<NotFound />} />
                            <Route path="/projects/:id" element={<Project />} />
                        </Routes>
                    </div>
                </Router>
            </ApolloProvider>
        </>
    )
}

export default App
