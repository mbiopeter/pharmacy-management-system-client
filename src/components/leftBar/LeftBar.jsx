import "./LeftBar.scss";
import logo from "../../assets/logo.png";
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import DisplaySettingsOutlinedIcon from '@mui/icons-material/DisplaySettingsOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HealingOutlinedIcon from '@mui/icons-material/HealingOutlined';
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useState } from "react";
import { Link } from "react-router-dom";
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
const LeftBar = () => {
  const [more, setMore] = useState(false);
  const [active, setActive] = useState('');
  return (
    <div className='leftBar'>
      {more === true && (
        <div className="overlayer" onClick={() => setMore(false)}></div>
      )}
      <div className="logo">
        <img src={logo} alt="" />
        <span>Josephcare Rx</span>
      </div>
      <div className="user">
        <div style={{display:'flex'}}>
          <div className="img">
            <img src="https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <div className="online"></div>
          </div>
          <div className="desc">
            <span>Subash</span><br/>
            <span>Super Admin</span>
          </div>
        </div>
        <div className="more" onClick={() => setMore(true)}>
          <span></span>
          <span></span>
          <span></span>
          {more === true && (
            <div className="float">
              <div className="point"></div>
              <Link to='/Profile' style={{textDecoration:'none', color:'inherit',display:'flex', alignItems:'center'}}>
                <div className="container" style={{borderBottom:' 0.2px solid #595d5d'}}>
                  <AccountCircleOutlinedIcon style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                  <span>Profile</span>
                </div>
              </Link>
              <div className="container">
                <LogoutOutlinedIcon style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px',color:'red'}}/>
                <span style={{color:'red'}}>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="navs">
        <Link to="/" style={{textDecoration:'none'}}>
          <div  className={active === 'Dashboard' ? 'nav active' : 'nav'} onClick={() => setActive('Dashboard')}>
            <div className="icon">
              <SpaceDashboardOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>Dashboard</span>
            </div>
          </div>
        </Link>
        <Link to="/Inventory" style={{textDecoration:'none'}}>
          <div className={active === 'Inventory' ? 'nav active' : 'nav'} onClick={() => setActive('Inventory')}>
            <div className="icon">
              <Inventory2OutlinedIcon  style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>Inventory</span>
            </div>
            <KeyboardArrowDownOutlinedIcon style={{paddingRight:'16px',fontSize:'18px'}}/>
          </div>
        </Link>
        <Link to="/Invoice" style={{textDecoration:'none'}}>
          <div className={active === 'Invoice' ? 'nav active' : 'nav'} onClick={() => setActive('Invoice')}>
            <div className="icon">
              <ReceiptOutlinedIcon  style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>Invoices</span>
            </div>
            <KeyboardArrowDownOutlinedIcon style={{paddingRight:'16px',fontSize:'18px'}}/>
          </div>
        </Link>
        <Link to="/Reports" style={{textDecoration:'none'}}>
          <div className={active === 'Reports' ? 'nav active' : 'nav'} onClick={() => setActive('Reports')}>
            <div className="icon">
              <DescriptionOutlinedIcon  style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>Reports</span>
            </div>
            <KeyboardArrowDownOutlinedIcon style={{paddingRight:'16px',fontSize:'18px'}}/>
          </div>
        </Link>
        <div className="nav sep">
          <div className="icon">
            <DisplaySettingsOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
            <span>Configurations</span>
          </div>

        </div>
        <Link to="/user" style={{textDecoration:'none'}}>
          <div className={active === 'User' ? 'nav active' : 'nav'} onClick={() => setActive('User')}>
            <div className="icon">
              <GroupOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>User management</span>
            </div>
          </div>
        </Link>
        <Link to="/Notification" style={{textDecoration:'none'}}>
          <div className={active === 'Notification' ? 'nav active' : 'nav'} onClick={() => setActive('Notification')}>
            <div className="icon">
              <NotificationsNoneOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
              <span>Notifications</span>
            </div>
          </div>
        </Link>
        <div className="nav sep">
          <div className="icon">
            <MessageOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
            <span>Chart with visitors</span>
          </div>
        </div>

        <div className="nav">
          <div className="icon">
            <SettingsOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
            <span>Application settings</span>
          </div>
        </div>
        <div className="nav">
          <div className="icon">
            <HealingOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
            <span>Covid 19</span>
          </div>
        </div>
        <div className="nav">
          <div className="icon">
            <HelpCenterOutlinedIcon style={{paddingLeft:'16px', fontSize:'18px'}}/>
            <span>Get technical help</span>
          </div>
        </div>


      </div>
    </div>
  )
}

export default LeftBar
