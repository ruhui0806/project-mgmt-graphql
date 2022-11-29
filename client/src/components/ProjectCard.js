import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function ProjectCard({ project }) {
    return (
        <div className="col-md-4">
            <div className="card mb-3">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title">{project.name} </h5>
                        <Link
                            className="btn btn-light"
                            to={`/projects/${project.id}`}
                        >
                            View
                        </Link>
                    </div>
                    <p className="small">
                        Status: <strong>{project.status}</strong>{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}
