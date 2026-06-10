import "./semiNav.css"
import menuimg from '../../assets/menu.svg';


function SemiNav(){
  const options =["Fresh", "MX Player","Sell","Bestsellers","Today's Deals","Mobiles","Prime"]
  return(
    <div className="semiNav">
      <div className="semiNavLeft">

        <div className="semiNavOptions">
          <img className="menuImg" src={menuimg} alt="menuicon"/>
          <div className="semiNavAll">All</div>
        </div>
        {options.map((option, index) =>(
          <div className="semiNavOptions" key={index}>
            <div className="semiNavAll">{option}</div>
        </div>

        ))
        }
      </div>
      <div className="semiNavRight">
        <img className="rightImg" src="https://m.media-amazon.com/images/G/31/img19/SiddMiniTV/Made_In_India_-_Titan_400x39_SWM_01_New._CB762157139_.jpg"/>
      </div>
    </div>
  )
}
export default SemiNav;