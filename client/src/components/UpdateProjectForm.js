import React from 'react'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_PROJECT } from '../mutations/projectMutations'
import { GET_PROJECT } from '../queries/projectQueries'

export default function UpdateProjectForm({ project }) {
    const [name, setName] = useState(project.name)
    const [description, setDescription] = useState(project.description)

    const statusChange = (status) => {
        switch (status) {
            case 'Not Started':
                return 'new'
            case 'In Progress':
                return 'progress'
            case 'Completed':
                return 'completed'
            default:
                return project.status
        }
    }
    const [status, setStatus] = useState(statusChange(project.status))

    const [updateProject] = useMutation(UPDATE_PROJECT, {
        variables: {
            name: name,
            description: description,
            id: project.id,
            status: status,
        },
        refetchQueries: [{ query: GET_PROJECT, variables: { id: project.id } }],
    })

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name || !description || !status) {
            return alert('Please fill out all fields')
        }
        updateProject(name, description, status)
    }

    return (
        <div className="mt-5">
            <h1>Update Project Details</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                        className="form-select"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="new">Not Started</option>
                        <option value="progress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Update Project
                </button>
            </form>
        </div>
    )
}
