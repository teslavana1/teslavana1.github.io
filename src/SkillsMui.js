import { Divider, Typography } from '@mui/material'
import { blue } from 'material-ui-colors'
import React from 'react'
import Skill from './SkillMui'

export default function Skills () {
    return (
        <>
        <Typography sx={{fontSize:'1.75rem'}} color={blue[500]}><b>Skills</b></Typography>
        <Divider sx={{mt: 1, mb: 2}} />
        {/* <hr className="text-muted"></hr> */}
        <Skill skill='HTML/CSS' progress='80' />
        <Skill skill='JavaScript' progress='60' />
        <Skill skill='React' progress='80' />
        <Skill skill='Bootstrap' progress='80' />
        <Skill skill='MUI' progress='80' />
        <Skill skill='Node' progress='60' />
        <Skill skill='MongoDB' progress='60' />
        <Skill skill='Illustrator' progress='80' />
        <Skill skill='Photoshop' progress='60' />

        {/* <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>HTML/CSS</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '80' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>JavaScript</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '60' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>ReactJS</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar"
                        aria-label="React progress bar" aria-valuenow="80" aria-valuemin="0"
                        aria-valuemax="100" style={{ width: '80' }}></div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>Bootstrap</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '80' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>MUI</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '80' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>NodeJS</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '60' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>MongoDB</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '60' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row mb-2 justify-content-start justify-content-sm-center justify-content-md-between">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>Illustrator</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 col-lg-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '80' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div>
        <div className="row justify-content-start justify-content-sm-center justify-content-md-start">
            <div className="col-6 col-sm-6 col-md-6">
                <h5>Photoshop</h5>
            </div>
            <div className="col-6 col-sm-6 col-md-6 text-primary my-auto">
                <div className="progress" style={{ height: 10 }}>
                    <div className="progress-bar" role="progressbar" aria-label="Example 20px high"
                        style={{ width: '60' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>
            </div>
        </div> */}
        </>

    )
}