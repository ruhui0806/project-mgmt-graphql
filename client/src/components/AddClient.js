import React from 'react'
import { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { useMutation } from '@apollo/client'
import { ADD_CLIENT } from '../mutations/clientMutations'
import { GET_CLIENTS } from '../queries/clientQueries'

export default function AddClientModal() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name: name, email: email, phone: phone },
        refetchQueries: [{ query: GET_CLIENTS }],
    })
    // const [addClient] = useMutation(ADD_CLIENT, {
    //     variables: { name, email, phone },
    //     update(cache, { data: { addClient } }) {
    //         const { clients } = cache.readQuery({ query: GET_CLIENTS })

    //         cache.writeQuery({
    //             query: GET_CLIENTS,
    //             data: { clients: [...clients, addClient] },
    //         })
    //     },
    // })

    const onSubmit = (e) => {
        e.preventDefault()

        if (name === '' || email === '' || phone === '') {
            return alert('Please fill in all fields')
        }

        addClient(name, email, phone)

        setName('')
        setEmail('')
        setPhone('')
    }

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
                                Add Client
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="mb-3" onSubmit={onSubmit}>
                                <div>
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
                                        Email
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                    />
                                    <label
                                        className="form-label"
                                        htmlFor="phone"
                                    >
                                        Phone
                                    </label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value)
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
