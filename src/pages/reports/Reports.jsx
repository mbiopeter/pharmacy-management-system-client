import "./Reports.scss"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";
import medical2 from "../../assets/medical_services_black_24dp 2 (1).png";
import payment from "../../assets/payments_black_24dp 1.png";
import next from "../../assets/Group 22.png";
const Reports = () => {

  return (
    <div className="reports">

      <div className="head">
        <div className="tittle">
          <span>Reports</span>
          <span>Overal reports related to pharmacy.</span>
        </div>
      </div>

      <div className="body">
        <div className="item">
          <div className="det">
            <img src={payment} alt="" />
            <span >Rs. 8,55,875</span>
            <span>Total Sales Report</span>
          </div>
          
            <div className="nav"  style={{borderTop:'2px solid #fed800', backgroundColor:'#fed80070'}}>
              <Link to='/Reports/Sales' style={{textDecoration:'none'}}>
                <span>View Detailed Report</span>
                <img src={next} alt="" />
              </Link>
            </div>
          
        </div>

        <div className="item">
          <div className="det">
            <img src={medical2} alt="" />
            <span >523</span>
            <span>Payment Report</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #01A768', backgroundColor:'#01a7679d'}}>
            <Link to='/Reports/Groups' style={{textDecoration:'none'}}>
              <span>View Detailed Report</span>
              <img src={next} alt="" />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Reports
