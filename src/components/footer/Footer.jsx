import React from 'react';
import './footer.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Map from '../map/Map';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__left">
                    <h4>Socials</h4>
                    <div className="multisocial">
                        <div className="box" id="1">
                            <div className='title'>Land / Marine / Geophysical / Seismic Sales</div>
                            <div className='email'>Email: paie@panindiagroup.com</div>
                            <div className='phone'>Phone:+91 (124) 4013954, 4300950</div>
                            <div className='fax'>fax:+91 (124) 2346646, 2342880</div>

                        </div>
                        <div className="box" id="2">
                            <div className='title'>Engineering Sales</div>
                            <div className='email'>Email:panrly@panindiagroup.com</div>
                            <div className='phone'>Phone:+91 (124) 2347711, 4386597</div>
                            <div className='fax'>fax:+91 (124) 2346646, 2342880</div>

                        </div>
                        <div className="box" id="3">
                            <div className='title'>Geoinformatics / Exploration & Production Services</div>
                            <div className='email'>Email:nmspl@panindiagroup.com</div>
                            <div className='phone'>Phone:+91 (124) 2343882, 4013528, 2343883</div>
                            <div className='fax'>fax: +91 (124) 2346646, 2342880</div>
                        </div>
                    </div>
                    <div className="icons">
                       <a href="https://www.facebook.com/panindia105" target={'_blank'}><FacebookIcon /></a> 
                       <a href="https://www.linkedin.com/in/pan-india-consultants-1b57831a9/" target={'_blank'}> <LinkedInIcon /></a>     
                    </div>

                </div>
                <div className="footer__right">
                    <h4>Address</h4>
                    <Map/>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2023 Pan India Consultants Pvt. Ltd. - All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
