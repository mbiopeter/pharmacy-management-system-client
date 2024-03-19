import "./List.scss";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Datatable from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";

const List = () => {
  const sampleData = [
  { id: 1, MedicineName: 'John Doe', MedicineId: 30, GroupName: 'john@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 2, MedicineName: 'Jane Smith', MedicineId: 25, GroupName: 'jane@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 3, MedicineName: 'Alice Johnson', MedicineId: 35, GroupName: 'alice@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 4, MedicineName: 'Bob Brown', MedicineId: 40, GroupName: 'bob@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 5, MedicineName: 'Emma Davis', MedicineId: 28, GroupName: 'emma@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 6, MedicineName: 'Michael Wilson', MedicineId: 45, GroupName: 'michael@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 7, MedicineName: 'Sophia Lee', MedicineId: 33, GroupName: 'sophia@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 8, MedicineName: 'William Martinez', MedicineId: 32, GroupName: 'william@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 9, MedicineName: 'Olivia Garcia', MedicineId: 27, GroupName: 'olivia@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 10, MedicineName: 'James Rodriguez', MedicineId: 38, GroupName: 'james@example.com',stockInQty:345,Action:'View Full Details' },
  { id: 11, MedicineName: 'Isabella Hernandez', MedicineId: 31, GroupName: 'isabella@example.com',stockInQty:345,Action:'View Full Details' },
  // Add more sample data as needed
];
  return (
    <div className='list'>
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/Inventory" style={{textDecoration:'none'}}>
                        <span>Inventory</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>List of Medicines (298)</span>
                </div>
                <span>List of medicine available for sale</span>
            </div>
            <div className="btn">
            <Link to="/Inventory/New" style={{textDecoration:'none'}}>
                <button><AddOutlinedIcon style={{marginRight:'10px'}}/>Add New Item</button>
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
            <div className="item">
                <FilterAltOutlinedIcon />
                <div className="filter">
                    <input type="text" placeholder="-Select Group-"/>
                    <KeyboardArrowDownOutlinedIcon />
                </div>
            </div>
        </div>  
        <Datatable data={sampleData} type='medicine' itemsPerPage={8}/>
    </div>
  )
}

export default List
