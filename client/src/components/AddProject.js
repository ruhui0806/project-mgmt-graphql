import React from 'react'
import { useState } from 'react'
import { FaListUl } from 'react-icons/fa'

export default function AddProjectModal() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('')
    const [clientId, setClientId] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(name, description, status)
    }
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addProjectModal"
            >
                <div className="d-flex align-items-center">
                    <FaListUl className="icon" />
                    <div>New Project</div>
                </div>
            </button>

            <div
                className="modal fade"
                id="addProjectModal"
                aria-labelledby="addProjectModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="addProjectModalLabel"
                            >
                                New Project
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label
                                        className="form-label"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="email"
                                    >
                                        Description
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        value={description}
                                        onChange={(e) =>
                                            setDescription(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="phone"
                                    >
                                        Status
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="phone"
                                        value={status}
                                        onChange={(e) =>
                                            setStatus(e.target.value)
                                        }
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
