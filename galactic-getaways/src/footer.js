import './footer.css';
import './App'

import logo from './content/Logo.png'; // Import logo image
import icons from './content/icons.png'

function Footer() {
    return (
        <>
            <footer className="bg-white">
                <img src={logo} alt="Image 1" style={{ width: '66px', height: '66px' }} />
                <p className='auther'>CS Strijom <span>© 2024</span></p>

                <div className="menu">
                    <ul >

                        <li class="item-508"><a href="#" style={{textDecoration: 'none', color: 'white'}}>Links</a>
                        </li>
                        <li class="item-509"><a href="#" style={{textDecoration: 'none', color: 'white'}}>Home</a>
                        </li>
                        <li class="item-509"><a href="#Selector" style={{textDecoration: 'none', color: 'white'}}>Destination</a>
                        </li>
                        <li class="item-509"><a href="#ComingSoon" style={{textDecoration: 'none', color: 'white'}}>Mobile App</a>
                        </li>

                    </ul>
                </div>

                <div className='Follow'>
                    <p>Follow us</p>
                    <img src={icons} alt="Image 1" style={{ width: '86px', height: '84px' }} />
                </div>


            </footer>
        </>
    );
}

export default Footer;