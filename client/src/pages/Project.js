import React from 'react'
import { GET_PROJECT } from '../queries/projectQueries'
import Spinner from '../components/Spinner'
import { useQuery } from '@apollo/client'
import { Link, useParams } from 'react-router-dom'
import ClientInfo from '../components/ClientInfo'
import DeletProjectButton from '../components/DeleteProjectButton'
import UpdateProjectForm from '../components/UpdateProjectForm'
export default function Project() {
    const { id } = useParams()
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id },
    })
    if (loading) return <Spinner />
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            {!loading && !error && (
                <div className="mx-auto w-175 card p-5">
                    <Link
                        to="/"
                        className="btn btn-light btn-sm w-125 d-inline ms-auto"
                    >
                        Back
                    </Link>
                    <h1>{data.project.name}</h1>
                    <p>{data.project.description}</p>
                    <h5 className="mt-3">Project Status</h5>
                    <p className="lead">{data.project.status}</p>

                    <ClientInfo client={data.project.client} />
                    <UpdateProjectForm project={data.project} />
                    <DeletProjectButton projectID={data.project.id} />
                </div>
            )}
        </div>
    )
}
