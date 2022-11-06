import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap'
import './PortfolioItem.css'

class PortfolioItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
    }
    render() {
        console.log(this.state)
        let { name, url, image, description, handleClick, isLoading } = this.props
        return (

            <div className='PortfolioItem card mb-5'>
                <a className='PorfolioItem-link' href={url} onClick={handleClick}>
                    <div className='PortfolioItem-row row g-0'
                    >
                        <div className='col-xl-6 mb-2 mb-lg-0 PortfolioItem-image justify-content-center align-items-center'>
                            <img className='img-fluid rounded-start' alt='Tesla Mart' src={image}></img>
                        </div>
                        <div className='col-xl-6'>
                            <div className='card-body'>
                                <h2 className='card-title text-primary PortfolioItem-title'>{name}</h2>
                                <h5 className='card-text PortfolioItem-body'>{description}</h5>
                            </div>
                        </div>
                    </div>
                </a>
            </div>

        )
    }
}

export default PortfolioItem