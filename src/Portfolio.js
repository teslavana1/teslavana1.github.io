import React, { Component } from 'react'
import PortfolioItem from './PortfolioItem'
import websites from './PortfolioSeeds'
import { v4 as uuid } from 'uuid'
import './Portfolio.css'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            selected: ''
        }
        this.isLoading = this.isLoading.bind(this)
    }
    isLoading(e) {
        console.log(e)
        this.setState({ loading: true })
    }
    render() {
        let main = websites.map(w => (
            <PortfolioItem key={uuid()} name={w.name} url={w.url} image={w.image} description={w.description} handleClick={this.isLoading} isLoading={this.state.loading} />
        ))
        console.log(this.state.loading)
        return (
            <div>
                <div className={'overlay ' + (this.state.loading ? 'd-flex' : 'd-none')}>
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
}

export default Portfolio