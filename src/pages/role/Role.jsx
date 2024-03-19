import { Link } from "react-router-dom";
import "./Role.scss";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import Datatable from "../../components/datatable/Datatable";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useState } from "react";

const Role = () => {
const permissions = [
    {
        id: 1,
        name: 'Add Medicine'
    },
    {
        id: 2,
        name: 'Edit Medicine'
    },
    {
        id: 3,
        name: 'Delete Medicine'
    },
    {
        id: 4,
        name: 'View Medicine'
    },
    {
        id: 5,
        name: 'Add User'
    },
    {
        id: 6,
        name: 'Edit User'
    },
    {
        id: 7,
        name: 'Delete User'
    },
    {
        id: 8,
        name: 'View User'
    },
    {
        id: 9,
        name: 'Add Supplier'
    },
    {
        id: 10,
        name: 'Edit Supplier'
    },
    {
        id: 11,
        name: 'Delete Supplier'
    },
    {
        id: 12,
        name: 'View Supplier'
    },
    {
        id: 13,
        name: 'Manage Inventory'
    },
    {
        id: 14,
        name: 'Process Sales'
    },
    {
        id: 15,
        name: 'Generate Reports'
    },
    {
        id: 16,
        name: 'Manage Customers'
    },
    {
        id: 17,
        name: 'Manage Orders'
    },
    {
        id: 18,
        name: 'View Dashboard'
    },
    {
        id: 19,
        name: 'Manage Discounts'
    },
    {
        id: 20,
        name: 'Manage Returns'
    },
    {
        id: 21,
        name: 'View Sales History'
    },
    {
        id: 22,
        name: 'Manage Expenses'
    },
    {
        id: 23,
        name: 'View Analytics'
    },
    {
        id: 24,
        name: 'Manage Notifications'
    },
    {
        id: 25,
        name: 'Manage Roles'
    }
];

const roles = [
    {
        id: 1,
        name: 'Admin',
        permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    },
    {
        id: 2,
        name: 'Pharmacist',
        permissions: [1, 2, 4, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    },
    {
        id: 3,
        name: 'Cashier',
        permissions: [4, 14, 16, 17, 18, 21]
    },
    {
        id: 4,
        name: 'Inventory Manager',
        permissions: [1, 2, 3, 4, 9, 10, 11, 12, 13, 20, 21, 22, 23]
    },
    {
        id: 5,
        name: 'Sales Representative',
        permissions: [4, 13, 14, 16, 17, 18, 21]
    }
];

const [filteredData, setFilteredData] = useState(permissions);

const handleFilterChange = (e, columnName) => {
    const { value } = e.target;
    const filtered = permissions.filter(item => {
        const columnValue = item[columnName];
        if (typeof columnValue === 'string') {
            return columnValue.toLowerCase().includes(value.toLowerCase());
        }
        return false;
    });
    setFilteredData(filtered);
};

  return (
    <div className="role">
         <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/User" style={{textDecoration:'none'}}>
                        <span>User Dashboard</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Roles and Permissions</span>
                </div>
                <span>Set user roles and permisions</span>
            </div>
        </div>    
        <div className="body">
            <div className="left">
                <div className="header">
                    <span>Profile Information</span>
                </div>
                <img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="det">
                    <span>Anne Smith</span>
                    <span><LocationOnOutlinedIcon style={{fontSize:'30px', marginRight:'10px'}}/>Nairobi Kenya Westlands</span>
                    <span><PersonOutlineOutlinedIcon style={{fontSize:'30px', marginRight:'10px'}}/>Cashier</span>
                    <span><LaunchOutlinedIcon style={{fontSize:'30px', marginRight:'10px'}}/>www.facebook.com</span>
                </div>
            </div>
            <div className="right">
                <div className="search">
                    <SearchOutlinedIcon style={{marginLeft:'20px'}}/>
                    <input onChange={(e) => handleFilterChange(e, 'name')} type="text" placeholder="Search"/>
                </div>
                <Datatable data={filteredData} itemsPerPage={5} type='Role'/>
            </div>
        </div>  
    </div>
  )
}

export default Role
