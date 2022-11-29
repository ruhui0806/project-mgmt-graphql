import React from 'react'
import { useNavigate } from 'react-router-dom'
import { DELETE_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECTS } from '../queries/projectQueries'
import { useMutation } from '@apollo/client'
import { FaTrash } from 'react-icons/fa'

export default function DeletProjectButton({ projectID }) {
    const navigate = useNavigate()

    const [deleteProject] = useMutation(DELETE_PROJECT, {
        variables: { id: projectID },
        onCompleted: () => {
            navigate('/')
        },
        refetchQueries: [{ query: GET_PROJECTS }],
    })

    return (
        <div className="d-flex ms-auto">
            <button className="btn btn-danger" onClick={deleteProject}>
                <FaTrash className="icon" />
                Delete
            </button>
        </div>
    )
}
