import "./Groups.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Datatable from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";

const Groups = () => {
  const sampleData = [
  { id: 1, GroupName: 'Generic Medicine', count: 30,Action:'View Full Details' },
  { id: 2, GroupName: 'Diabetes', count: 25,Action:'View Full Details' },
];
  return (
    <div className='groups'>
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/Inventory" style={{textDecoration:'none'}}>
                        <span>Inventory</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Medical Groups (2)</span>
                </div>
                <span>List of medical groups</span>
            </div>
            <div className="btn">
            <Link to="/Inventory/New" style={{textDecoration:'none'}}>
                <button><AddOutlinedIcon style={{marginRight:'10px'}}/>Add New Group</button>
            </Link>
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
        <Datatable data={sampleData} type='group' itemsPerPage={8}/>
    </div>
  )
}

export default Groups
