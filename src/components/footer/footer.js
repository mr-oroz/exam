import React, {Component} from 'react';
import './footer.css'

class Footer extends Component {
    render() {
        return (
            <footer className='py-5 bg-dark footer'>
                <div className='container'>
                    <p className='m-0 text-center text-white'>Copyright © Your Website 2020</p>
                </div>
            </footer>
        );
    }
}

export default Footer;