import React from 'react'
import { Phone, Envelope, Laptop, Linkedin } from 'react-bootstrap-icons'

export default function Contact () {
    return (
        <>
                            <h2 className="text-primary">Contact</h2>
                    <hr className="text-muted"></hr>
                    <div className="link col-12 mb-4">
                        <h4><a href="mailto: andrwmg@gmail.com">
                            <Envelope className='text-primary me-1' />
                            <i className="text-primary bi bi-envelope me-1"></i>
                            andrwmg@gmail.com</a>
                        </h4>
                    </div>
                    <div className="link col-12 mb-4">
                        <h4><a href="tel:6108884468">
                            <Phone className='text-primary me-1' />
                            <i className="text-primary bi bi-phone me-1"></i>
                            610-888-4468</a></h4>
                    </div>
                    <div className="link col-12 mb-4">
                        <h4>
                            <a href="https://www.andrewmichaelgay.com">
                                <Laptop className='text-primary me-1' />
                                <i className="text-primary bi bi-laptop me-1"></i>
                                andrewmichaelgay.com
                            </a>
                        </h4>
                    </div>
                    <div className="link col-12">
                        <h4>
                            <a href="http://www.linkedin.com/in/andrwmg">
                            <Linkedin className='text-primary me-1' />
                            <i className="text-primary bi bi-linkedin me-1"></i>
                            linkedin.com/in/andrwmg</a>
                        </h4>
                    </div>
</>
    )
}