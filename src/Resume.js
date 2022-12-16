import React from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import './Resume.css'
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import About from './About';
import Contact from './Contact';

export default function Resume() {
    return (
        <div className="container-fluid">
            <div className="row firstRow align-items-start justify-content-between p-2">
                <div className="about col-12 col-lg-4 order-lg-1 text-md-left py-3 px-2 px-md-4 px-xl-5 align-items-center">
                    <div className='w-100'>
                    <img src="https://res.cloudinary.com/deuft4auk/image/upload/v1665117910/Personal%20Website/canyon_ibikw8.jpg"
                        className='headshot roundedCorners mb-3' alt="" />
                        </div>
                    <h1 className="name mb-auto fw-bold">Andrew Gay</h1>
                    <h3 className="title fw-normal">Software Engineer</h3>
                </div>

                <div className="col-12 col-md-6 col-lg-4 py-3 px-2 px-md-4 px-xl-5 order-lg-3 justify-content-center">
                    <Contact />
                </div>

                <div className="col-12 col-md-6 col-lg-4 py-3 px-2 px-md-4 px-xl-5 order-lg-2 justify-content-center">
                    <About />
                </div>

            </div>
            <div className="row bg-white p-2 justify-content-center justify-content-sm-between justify-content-md-evenly">
                <div className="col-12 col-md-6 col-lg-4 skills py-3 px-2 px-md-4 px-xl-5">
                    <div className='row'>
                    <div className="col-12 col-sm-6 col-md-12">
                        <Skills />
                    </div>
                    <div className="col-12 col-sm-6 col-md-12 d-none d-sm-inline-block d-lg-none py-md-3">
                        <Education />
                    </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-3 px-2 px-md-4 px-xl-5">
                    <Experience />
                </div>
                <div className="col-12 col-md-6 col-lg-4 py-3 px-2 px-md-4 px-xl-5 d-inline-block d-sm-none d-lg-inline-block">
                    <Education />
                </div>
            </div>
        </div>
    )
}