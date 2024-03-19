import "./Invoice.scss";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Datatable from "../../components/datatable/Datatable";
import { useState } from "react";
import { Link } from "react-router-dom";
const Invoice = () => {
const data = [
    {
        id: 1,
        client: 'Mbio Peter',
        start: '04-03-2024',
        end: '30-03-2024',
        amount: '$1200',
        status: 'Paid',
    },
    {
        id: 2,
        client: 'Mbio Peter',
        start: '04-03-2024',
        end: '30-03-2024',
        amount: '$1200',
        status: 'Pending',
    },
    {
        id: 3,
        client: 'John Doe',
        start: '05-03-2024',
        end: '25-03-2024',
        amount: '$1500',
        status: 'Pending',
    },
    {
        id: 4,
        client: 'Jane Smith',
        start: '06-03-2024',
        end: '28-03-2024',
        amount: '$1000',
        status: 'Paid',
    },
    {
        id: 5,
        client: 'Alice Johnson',
        start: '07-03-2024',
        end: '27-03-2024',
        amount: '$1800',
        status: 'Pending',
    },
    {
        id: 6,
        client: 'Eriksson Brown',
        start: '08-03-2024',
        end: '26-03-2024',
        amount: '$1600',
        status: 'Paid',
    },
    {
        id: 7,
        client: 'Olivia White',
        start: '09-03-2024',
        end: '29-03-2024',
        amount: '$1300',
        status: 'Pending',
    },
    {
        id: 8,
        client: 'William Clark',
        start: '10-03-2024',
        end: '30-03-2024',
        amount: '$1100',
        status: 'Paid',
    },
    {
        id: 9,
        client: 'Sophia Harris',
        start: '11-03-2024',
        end: '31-03-2024',
        amount: '$1900',
        status: 'Pending',
    },
    {
        id: 10,
        client: 'Henry Young',
        start: '12-03-2024',
        end: '25-04-2024',
        amount: '$1400',
        status: 'Paid',
    },
];
const countPaid = () => {
    return data.filter(item => item.status === 'Paid').length;
};
const countPending= () => {
    return data.filter(item => item.status === 'Pending').length;
};


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
  return (
    <div className='invoice'>
      <div className="upper">

        <div className="item">
            <div className="titt">
                <span>Total Revenue</span>
                <MoreHorizOutlinedIcon style={{fontSize:'30px', color:'#777'}}/>
            </div>
            <div className="exp">
                <div className="left">
                    <span>$231,234</span>
                </div>
                <div className="right">
                    <span>
                        <TrendingUpOutlinedIcon style={{marginRight:'5px'}}/>
                        5.1%
                    </span>
                    <span>From last Week</span>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="titt">
                <span>Total Customers</span>
                <MoreHorizOutlinedIcon style={{fontSize:'30px', color:'#777'}}/>
            </div>
            <div className="exp">
                <div className="left">
                    <span>12,000</span>
                </div>
                <div className="right">
                    <span>
                        <TrendingUpOutlinedIcon style={{marginRight:'5px'}}/>
                        3.1%
                    </span>
                    <span>From last Week</span>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="titt">
                <span>Total Transactions</span>
                <MoreHorizOutlinedIcon style={{fontSize:'30px', color:'#777'}}/>
            </div>
            <div className="exp">
                <div className="left">
                    <span>781</span>
                </div>
                <div className="right">
                    <span style={{color:'red'}}>
                        <TrendingDownOutlinedIcon style={{marginRight:'5px'}}/>
                        2.1%
                    </span>
                    <span>From last Week</span>
                </div>
            </div>
        </div>
        <div className="item">
            <div className="titt">
                <span>Total Products</span>
                <MoreHorizOutlinedIcon style={{fontSize:'30px', color:'#777'}}/>
            </div>
            <div className="exp">
                <div className="left">
                    <span>234</span>
                </div>
                <div className="right">
                    <span>
                        <TrendingUpOutlinedIcon style={{marginRight:'5px'}}/>
                        5.1%
                    </span>
                    <span>From last Week</span>
                </div>
            </div>
        </div>

      </div>
      <div className="lower">
        <div className="tittle">
            <span>Invoice</span>
            <div className="con">
                <button>
                    monthly
                    <div className="round">
                        <KeyboardArrowDownOutlinedIcon style={{fontSize:'15px',color:'#FFFFFF'}}/>
                    </div>
                </button>
                <Link to="new" style={{textDecoration:'none'}}>
                    <button>
                        add invoice
                        <div className="round">
                            <AddOutlinedIcon style={{fontSize:'15px',color:'#FFFFFF'}}/>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
        <div className="tbheader">
            <div className="span">
                <span>All invoice
                    <div className="count">
                        <span>{data.length}</span>
                    </div>
                </span>
                <span>Paid
                    <div className="count">
                        <span>{countPaid()}</span>
                    </div>
                </span>
                <span>Pedding
                    <div className="count">
                        <span>{countPending()}</span>
                    </div>
                </span>
            </div>
            <div className="right">
                <div className="search">
                    <input onChange={(e) => handleFilterChange(e, 'client')} type="text" placeholder="Search by client name"/>
                    <SearchOutlinedIcon style={{paddingLeft:'10px',paddingRight:'10px',cursor:'pointer'}}/>
                </div>
            </div>
        </div>
        <Datatable data={filteredData} itemsPerPage={8} type='Invoice'/>
      </div>
    </div>
  )
}

export default Invoice
