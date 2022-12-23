import React, { useState } from 'react'
import PortfolioItem from './PortfolioItemMui'
import websites from './PortfolioSeeds'
import { v4 as uuid } from 'uuid'
import './Portfolio.css'

export default function Portfolio () {
    const [loading, setLoading] = useState(false)

    console.log(loading)

        const main = websites.map(app => (
            <PortfolioItem key={uuid()} {...app} setLoading={setLoading} />
        ))

        return (
            <div>
                <div className={'overlay ' + (loading ? 'd-flex' : 'd-none')}>
                    <div className='container-fluid'>
                        <div className='row justify-content-center'>
                            <div className='col-8 col-sm-auto bg-white rounded text-center p-3'>
                            <div className="spinner-border text-primary me-3 text-center" role="status">
                                <span className='visually-hidden'>Loading...</span>
                            </div>
                            <div className="spinner-text text-primary">Sorry, this web app needs a second to wake up!</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-4'>
                    <div className='row justify-content-center p-2'>
                        <div className='col-12 col-lg-10'>
                            {main}
                        </div>
                    </div>
                </div>
            </div>
        )
    }