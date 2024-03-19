import { Link } from "react-router-dom";
import "./Userdashboard.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Datatable from "../../components/datatable/Datatable";
import { useState } from "react";

const Userdashboard = () => {
    const [options, setOptions] = useState(false)
    const [optionsId, setOptionsId] = useState(0)
    const data = [
        {
            id: 1,
            name: 'David Weger',
            email:'david@gmail.com',
            role: 'Super Admin',
            createDate: '24 Oct 2015'
        },
        {
            id: 2,
            name: 'Emily Smith',
            email:'emily@gmail.com',
            role: 'Admin',
            createDate: '15 Feb 2019'
        },
        {
            id: 3,
            name: 'John Doe',
            email:'jane@gmail.com',
            role: 'User',
            createDate: '10 May 2020'
        },
        {
            id: 4,
            name: 'Sarah Johnson',
            email:"sarah@gmail.com",
            role: 'Super Admin',
            createDate: '02 Aug 2017'
        },
        {
            id: 5,
            name: 'Michael Brown',
            email:'michael@gmail.com',
            role: 'Admin',
            createDate: '18 Nov 2018'
        },
        {
            id: 6,
            name: 'Jessica Lee',
            email:'jessica@gmail.com',
            role: 'User',
            createDate: '07 Apr 2021'
        },
        {
            id: 7,
            name: 'Daniel Garcia',
            email:'daniel@gmail.com',
            role: 'Super Admin',
            createDate: '29 Sep 2016'
        },
        {
            id: 8,
            name: 'Emma Wilson',
            email:'ema@gmail.com',
            role: 'Admin',
            createDate: '03 Mar 2022'
        },
        {
            id: 9,
            name: 'Christopher Brown',
            email:'christopher@gmail.com',
            role: 'User',
            createDate: '12 Jun 2019'
        },
        {
            id: 10,
            name: 'Sophia Rodriguez',
            email:'sophia@gmail.com',
            role: 'Super Admin',
            createDate: '21 Dec 2014'
        }
    ];

    const [filteredData, setFilteredData] = useState(data);

    const handleFilterChange = (e, columnName) => {
        const { value } = e.target;
        const filtered = data.filter(item => {
            const columnValue = item[columnName];
            if (typeof columnValue === 'string') {
                return columnValue.toLowerCase().includes(value.toLowerCase());
            }
            return false;
        });
        setFilteredData(filtered);
    };

    const handleOptions = (id) => {
        setOptions(!options)
        setOptionsId(id)
    }
    return (
    <div className="userdashboard">
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <span>User Dashboard</span>
                </div>
                <div className="searchcon">
                    <div className="search">
                        <SearchOutlinedIcon style={{marginLeft:'20px'}}/>
                        <input onChange={(e) => handleFilterChange(e, 'name')} type="text" placeholder="Search" />
                    </div>
                    <Link to="/User/New" style={{textDecoration:'none'}}>
                        <button>Add User<AddOutlinedIcon/></button>
                    </Link>
                </div>
            </div>
        </div>
        <div className="table">
            <div className="header">
                <span>List Users</span>
            </div>
             <Datatable data={filteredData} itemsPerPage={8} type='userdashboard' handleOptions={handleOptions} options={options} optionsId={optionsId}/>
        </div>
    </div>
    )
}

export default Userdashboard
