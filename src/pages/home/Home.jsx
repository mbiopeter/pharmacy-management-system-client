import "./Home.scss"
import {FaRegFileExcel } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import health from "../../assets/health_and_safety_black_24dp 1.png";
import medical from "../../assets/medical_services_black_24dp 2.png";
import payment from "../../assets/payments_black_24dp 1.png";
import warning from "../../assets/warning_amber_black_24dp 1.png";
import next from "../../assets/Group 22.png";
import { useState } from "react";


const Home = () => {
  const [download, setDownload] = useState(false)
  return (
    <div className="home">
      {download === true && (
        <div className="overlayer" onClick={() => setDownload(false)}></div>
      )}
      <div className="head">

        <div className="tittle">
          <span>Dashboard</span>
          <span>A quick overview of the inventory</span>
        </div>
        <div className="btn">
          <button onClick={() => setDownload(true)}>Download Report<KeyboardArrowDownOutlinedIcon /></button>
          {download === true && (
            <div className="float" >
              <div className="point"></div>
              <div className="container" style={{borderBottom:' 0.2px solid #595d5d'}}>
                <FaRegFileExcel style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                <span>Excel</span>
              </div>
              <div className="container">
                <AiOutlineFilePdf style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                <span >PDF</span>
              </div>
            </div>
          )}
        </div>

      </div>
      <div className="body">

        <div className="item">
          <div className="det">
            <img src={health} alt="" />
            <span >Good</span>
            <span>Inventory Status</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #01A768', backgroundColor:'#01a7679d'}}>
            <span>View Detailed Reports</span>
            <img src={next} alt="" />
          </div>
        </div>

        <div className="item">
          <div className="det">
            <img src={payment} alt="" />
            <span >Rs.8,55,875</span>
            <span>Revenue: <span style={{fontSize:'11px', paddingLeft:'5px',paddingRight:'10px'}}> Jan 22</span>  <KeyboardArrowDownOutlinedIcon style={{fontSize:'15px'}}/></span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #FED600', backgroundColor:'#fed80093'}}>
            <span>View Detailed Reports</span>
            <img src={next} alt="" />
          </div>
        </div>

        <div className="item">
          <div className="det">
            <img src={medical} alt="" />
            <span >298</span>
            <span>Medicine Available</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #03A9F5', backgroundColor:'#03a8f580'}}>
            <span>View Detailed Reports</span>
            <img src={next} alt="" />
          </div>
        </div>

        <div className="item">
          <div className="det">
            <img src={warning} alt="" />
            <span >01</span>
            <span>Medicine Shortage</span>
          </div>
          <div className="nav" style={{borderTop:'2px solid #f0473e', backgroundColor:' #f0473e96'}}>
            <span>View Detailed Reports</span>
            <img src={next} alt="" />
          </div>
        </div>

      </div>
      <div className="tail">

          <div className="item">
            <div className="header">
              <span>Inventory</span>
              <span>Go to Configuration<img src={next} alt=""/></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
              <div className="columns">
                <span>298</span>
                <span>Total no of medicine</span>
              </div>
              <div className="columns">

              <span>298</span>
              <span>Total no of medicine</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <span>Quick Report</span>
              <span style={{display:'flex', alignItems:'center'}}>January 2022<KeyboardArrowDownOutlinedIcon style={{fontSize:'17px'}}/></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
              <div className="columns">
                <span>70,856</span>
                <span>Qty of medicines sold</span>
              </div>
              <div className="columns">

              <span>5,288</span>
              <span>Invoices Generated</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <span>My Pharmacy</span>
              <span>Go to User Management<img src={next} alt=""/></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
              <div className="columns">
                <span>04</span>
                <span>Total no of suppliers</span>
              </div>
              <div className="columns">

              <span>05</span>
              <span>Total no of Users</span>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <span>Customers</span>
              <span>Go to Customers Page<img src={next} alt=""/></span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
              <div className="columns">
                <span>845</span>
                <span>Total no of medicine</span>
              </div>
              <div className="columns">

              <span>Amoziline</span>
              <span>Frequent bought item</span>
              </div>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Home
