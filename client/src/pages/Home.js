import React from 'react'
import Clients from '../components/Clients'
import Projects from '../components/Projects'
import AddClientModal from '../components/AddClient'
import AddProjectModal from '../components/AddProject'
export default function Home() {
    return (
        <div>
            <div className="d-inline-flex gap-3 mb-4">
                <AddClientModal />
                <AddProjectModal />
            </div>
            <Projects />
            <hr />
            <Clients />
        </div>
    )
}
