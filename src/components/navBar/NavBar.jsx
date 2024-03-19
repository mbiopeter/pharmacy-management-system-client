import "./NavBar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { useEffect, useState } from "react";

const NavBar = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [greatings, setGreatings] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const {formattedTime,time} = formatDate(now);
      setCurrentTime(formattedTime);
      setGreatings(time)
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const formatDate = (date) => {
    const options = {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false, 
    };
    const formattedTime = date.toLocaleString('en-US', options);
    const hour = date.getHours();
    const time =
      (hour >= 15 && hour < 19) ? "Evening" :
      (hour >= 19 || hour < 3) ? "Night" :
      (hour >= 3 && hour < 12) ? "Morning" :
      "Afternoon";


    return { formattedTime, time };
  };
  return (
    <div className='navBar'>
      <div className="search">
        <input type="text" placeholder="Search for anything here"/>
        <SearchOutlinedIcon style={{paddingLeft:'10px',paddingRight:'10px',cursor:'pointer'}}/>
      </div>
      <div className="lang">
        <LanguageOutlinedIcon />
        <span>English (USA)</span>
        <KeyboardArrowDownOutlinedIcon />
      </div>
      <div className="date">
        <div className="one">
          <span className="dot"></span>
          <span>Good {greatings}</span>
        </div>
        <div style={{width:'auto'}}> 
          <span className="datetime">{currentTime}</span>
        </div>
      </div>
    </div>
  )
}

export default NavBar
