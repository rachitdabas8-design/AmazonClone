import './navbar.css'
import { Link } from "react-router-dom"
import amazonimg from '../../assets/amazon.svg';
import locationimg from '../../assets/location.svg';
import down from '../../assets/downarrow.png';
import searchicon from '../../assets/search.png';
import india from '../../assets/india.png';
import cart from '../../assets/cart.png';

function Nav(){
  return(
    <div className='navbar'>
        
        <div className='leftNav'>
                <div className='leftNavLogo'>
                    <img className='amazonlogo' src={amazonimg} alt='amazonLogo' />
                    <span >.in</span>
                </div>
                <div className='navbarLocation'>
                    <img className='locationimg' src={locationimg} alt='locationIcon' />
                    <div className='locationarea'>
                        <div className='resentlocation'>Delivering to Delhi</div>
                        <div className='updatedlocation'>Update location</div>
                    </div>
                </div>
            </div>

            <div className='searchbox'>
                <div className='searchdiv'>
                    <div className='searchBoxall'>
                        <div className='searchBoxtext'>
                            All 
                            <img  src={down} alt='downIcon' /> </div>
                        
                    </div>
                    <input className='InputsearchBox' type='text' placeholder='Search Amazon.in' />
                    
                    <div className='searchicon'>
                        <img  src={searchicon} alt='searchIcon' />
                    </div>
                </div>
            </div>

            <div className='rightnav'>
                <div className="india">
                    <img className='indiaflag' src={india} alt='indiaFlag' />
                    <div className='bottomtext'> EN
                        <img  src={down} alt='downIcon' /> 
                        </div>  
                </div>
                <div className='rightsidetext'>
                    <div className='toptext'>Hello, user</div>
                    <div className='bottomtext'>Account & Lists</div>
                </div>
                 <div className='rightsidetext'>
                    <div className='toptext'>Returns</div>
                    <div className='bottomtext'> & Orders</div>
                </div>
                <div className='rightsidetext'>
                    <Link to="/cart">
                    <span className='totalnoitem'>0</span>
                    <img className='cartlogo' src={cart} alt='cartlogo'/>
                    </Link>
                </div>
                
            </div>

           
        </div>
    )
}

export default Nav;