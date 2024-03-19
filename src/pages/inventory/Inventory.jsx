import "./Inventory.scss"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";
import medical from "../../assets/medical_services_black_24dp 2.png";
import medical2 from "../../assets/medical_services_black_24dp 2 (1).png";
import warning from "../../assets/warning_amber_black_24dp 1.png";
import next from "../../assets/Group 22.png";
const Inventory = () => {

  return (
    <div className="inventory">

      <div className="head">
        <div className="tittle">
          <span>Inventory</span>
          <span>List of medicine available for sale</span>
        </div>
        <div className="btn">
          <button><AddOutlinedIcon style={{marginRight:'10px'}}/>Add New Item</button>
        </div>
      </div>

      <div className="body">
        <div className="item">
          <div className="det">
            <img src={medical} alt="" />
            <span >298</span>
            <span>Medicine Availble</span>
          </div>
          
            <div className="nav"  style={{borderTop:'2px solid #03A9F5', backgroundColor:'#03a8f580'}}>
              <Link to='/Inventory/List' style={{textDecoration:'none'}}>
                <span>View Full List</span>
                <img src={next} alt="" />
              </Link>
            </div>
          
        </div>

        <div className="item">
          <div className="det">
            <img src={medical2} alt="" />
            <span >02</span>
            <span>Medical Groups</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #01A768', backgroundColor:'#01a7679d'}}>
            <Link to='/Inventory/Groups' style={{textDecoration:'none'}}>
              <span>View Groups</span>
              <img src={next} alt="" />
            </Link>
          </div>
        </div>

        <div className="item">
          <div className="det">
            <img src={warning} alt="" />
            <span >01</span>
            <span>Medicine Shortage</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #f0473e', backgroundColor:' #f0473e96'}}>
            <span>Resolve Now</span>
            <img src={next} alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Inventory
