import React from 'react'
import 'bootstrap'
import './PortfolioItem.css'
import { Button } from '@mui/material'

export default function PortfolioItem({ name, url, detailsUrl, image, description, setLoading }) {

    return (
        <div className='PortfolioItem card mb-5'>
            <div className='PortfolioItem-row row g-0 h-100'>
                <div className='col-12 col-xl-6 PortfolioItem-image h-100'>
                    <a href={url} onClick={() => setLoading(true)}>
                        <img className='img-fluid rounded-start' style={{ objectFit: 'cover', height: { xl: '360px' } }} alt='Tesla Mart' src={image} />
                    </a>
                </div>
                <div className='col-12 col-xl-6'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-xl-auto'>
                                <h2 className='card-title text-primary PortfolioItem-title mb-0'>{name}</h2>
                            </div>
                        </div>
                        <h5 className='card-text PortfolioItem-body my-4'>{description}</h5>
                        <div className='col-12 col-xl my-4 my-xl-0'>
                                <div className='row flex-nowrap'>
                                    <div className='col-auto'>
                                        <a href={url} onClick={() => setLoading(true)}>
                                            <Button variant='outlined'>View Web App</Button>
                                            {/* <div className='btn btn-outline-primary justify-content-center align-items-center'>View WebApp</div> */}
                                        </a>
                                    </div>
                                    {detailsUrl ?
                                        <div className='col-auto'>

                                            <a href={detailsUrl}>
                                                <Button variant='outlined'>More Details</Button>
                                                {/* <div className='btn btn-outline-info justify-content-center align-items-center'>More Details</div> */}
                                            </a>
                                        </div>
                                        :
                                        null
                                    }
                                </div>
                            </div>

                        {/* <div className='btn position-absolute bottom-0 right-0'>View Webapp
                                    </div> */}
                    </div>
                </div>
            </div>
        </div>

    )
}