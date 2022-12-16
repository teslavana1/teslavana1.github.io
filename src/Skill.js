import React from 'react'

export default function Skill({skill, progress}) {
    return(
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>{skill}</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: progress }} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
    )
}