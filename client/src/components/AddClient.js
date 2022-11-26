import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'

export default function AddClientModal() {
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addClientModal"
            >
                <div className="d-flex align-items-center">
                    <FaUser className="icon" />
                    <div>Add Client</div>
                </div>
            </button>

            <div
                className="modal fade"
                id="addClientModal"
                aria-labelledby="addClientModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="addClientModalLabel"
                            >
                                Modal title
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="mb-3">
                                <div>
                                    <label
                                        className="form-label"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input type="text" id="name" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
