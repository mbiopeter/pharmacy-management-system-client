import "./Desc.scss"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from "react-router-dom";
import next from "../../assets/Group 22.png";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Desc = () => {
  return (
    <div className='description'>
        <div className="heading">
            <div className="tittle">
                <div className="path">
                    <Link to="/Inventory" style={{textDecoration:'none'}}>
                        <span>Inventory</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <Link to="/Inventory/List" style={{textDecoration:'none'}}>
                        <span>List of Medicines</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Azithral 500 Tablet</span>
                </div>
                <span>List of medicine available for sale</span>
            </div>
            <div className="btn">
            <button><CreateRoundedIcon style={{marginRight:'10px'}}/>Edit Details</button>
            </div>
        </div>    
        <div className="sub">
            <div className="item">
                <div className="search">
                    <input type="text" placeholder="Search Medicine Inventory.."/>
                    <SearchOutlinedIcon style={{marginRight:'10px',cursor:'pointer'}}/>
                </div>
            </div>
        </div>
        <div className="halfCon">
            <div className="half">
                <div className="tittle">
                    <span>Medicine</span>
                </div>
                <div className="body">
                    <div className="left" style={{width:'50%'}}>
                        <span>298</span>
                        <span>Medicine ID</span>
                    </div>
                    <div className="right" style={{width:'50%'}}>
                        <span>24</span>
                        <span>Medicine Group</span>
                    </div>
                </div>
            </div>       
            <div className="half">
                <div className="tittle">
                    <span>Inventory in Qty</span>
                    <span>Send Stock Request<img style={{marginLeft:'10px'}} src={next} alt=""/></span>
                </div>
                <div className="body">
                    <div className="left" style={{width:'33.3%'}}>
                        <span>298</span>
                        <span>Lifetime Supply</span>
                    </div>
                    <div className="middle" style={{width:'33.3%'}}>
                        <span>290</span>
                        <span>Lifetime Sales</span>
                    </div>
                    <div className="right" style={{width:'33.3%'}}>
                        <span>08</span>
                        <span>Stock Letf</span>
                    </div>
                </div>
            </div>       
        </div> 
        <div className="full">
            <div className="header">
                <span>How to use</span>
            </div>
            <div className="abaut">
                <span>With these changes, the border-collapse property should work correctly, and borders should be displayed between table cells.</span>
            </div>
        </div>     
        <div className="full">
            <div className="header">
                <span>Side Effects</span>
            </div>
            <div className="abaut">
                <span>With these changes, the border-collapse property should work correctly, and borders should be displayed between table cells. Make sure there are no conflicting styles from other CSS files or components that might be affecting the table's appearance. If the issue persists, inspect the table element using browser developer tools to identify any overriding styles or errors in the CSS.</span>
            </div>
        </div>      
        <button><DeleteOutlinedIcon style={{ color:'#F0483E', marginRight:'6px', fontSize:'20px'}}/>Delete Medicine</button>  
    </div>
  )
}

export default Desc 
