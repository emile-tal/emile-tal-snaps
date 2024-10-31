import { FooterLinksColumn } from '../FooterLinksColumn/FooterLinksColumn'
import { Wordmark } from '../Wordmark/Wordmark'
import './Footer.scss'
import facebookIcon from '../../Icons/Facebook.svg'
import xIcon from '../../Icons/X_twitter.svg'
import instagramIcon from '../../Icons/Instagram.svg'
import pinterestIcon from '../../Icons/Pinterest.svg'
import { FooterSocial } from '../FooterSocial/FooterSocial'

export function Footer() {
    const footerLinksColumnArr1 = ['For photographers', 'Hire talent', 'Inspiration']
    const footerLinksColumnArr2 = ['About', 'Careers', 'Support']
    const footerSocialIconsObj = [{ company: 'Facebook', icon: facebookIcon }, { company: 'X', icon: xIcon }, { company: 'Instagram', icon: instagramIcon }, { company: 'Pinterest', icon: pinterestIcon }]

    return (
        <footer className="footer">
            <div className="footer__desktop-container">
                <div className='footer__tablet-container'>
                    <div className='footer__wordmark-container'>
                        <Wordmark />
                    </div>
                    <div className='footer__links-container'>
                        <FooterLinksColumn links={footerLinksColumnArr1} />
                        <FooterLinksColumn links={footerLinksColumnArr2} />
                    </div>
                </div>
                <FooterSocial icons={footerSocialIconsObj} />
            </div>
            <div className='footer__copyright-container'>
                <p className='footer__copyright-text'>© 2024 Snaps</p>
                <p className='footer__copyright-text'>Terms</p>
                <p className='footer__copyright-text'>Privacy</p>
                <p className='footer__copyright-text'>Cookies</p>
            </div>
        </footer>
    )
}