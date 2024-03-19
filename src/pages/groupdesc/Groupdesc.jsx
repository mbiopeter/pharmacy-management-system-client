import "./Groupdesc.scss"
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import { Link } from "react-router-dom";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Datatable from "../../components/datatable/Datatable";
import closeIcon from "../../assets/Vector.png"
import done from "../../assets/done_black_24dp (1) 1.png"
import { useState } from "react";

const Groupdesc = () => {
    const [close, setClose] = useState(true);
    const [success, setSuccess] = useState(false);

    if(success === true) {
        setTimeout(() => {
            setSuccess(false)
        }, 5000);
    }
    const AddGroup = () => {
        setSuccess(true)
        setClose(true)
    }
    const sampleData = [
        { id: 1, GroupName: 'Augmentin 65 Duo Tablet', count: '22', Action: 'Delete from Group' },
        { id: 2, GroupName: 'Azithral 500 Tablet', count: '08', Action: 'Delete from Group' },
    ];
    return (
        <div className='groupdesc'>
            <div className="heading">
                <div className="tittle">
                    <div className="path">
                        <Link to="/Inventory" style={{ textDecoration: 'none' }}>
                            <span>Inventory</span>
                        </Link>
                        <NavigateNextOutlinedIcon style={{ fontSize: '20px' }} />
                        <Link to="/Inventory/Groups" style={{ textDecoration: 'none' }}>
                            <span>Medicine Groups</span>
                        </Link>
                        <NavigateNextOutlinedIcon style={{ fontSize: '20px' }} />
                        <span>Generic Medicine (2)</span>
                    </div>
                    <span>List of medicine available for sale</span>
                </div>
                <div className="btn">
                    <button onClick={() => setClose(false)}><AddOutlinedIcon style={{ marginRight: '10px' }} />Add Medicine</button>
                </div>
            </div>
            <div className="sub">
                <div className="item">
                    <div className="search">
                        <input type="text" placeholder="Search Medicine Inventory.." />
                        <SearchOutlinedIcon style={{ marginRight: '10px', cursor: 'pointer' }} />
                    </div>
                </div>
            </div>
            <Datatable data={sampleData} type='groupId' itemsPerPage={8} />
            <button><DeleteOutlinedIcon style={{ color: '#F0483E', marginRight: '6px', fontSize: '20px' }} />Delete Group</button>
            {close === false && (
                <>
                    <div className="overlayer" onClick={() => setClose(true)}></div>
                    <div className="popup">
                        <div className="close">
                            <img onClick={() => setClose(true)} src={closeIcon} alt="" />
                        </div>
                        <div className="tittle">
                            <span>Add Medicine</span>
                        </div>
                        <div className="body">
                            <span>Medicine</span>
                            <div className="search">
                                <input type="text" placeholder="Enter Medicine Name or Medicine ID" />
                                <SearchOutlinedIcon />
                            </div>
                            <button onClick={AddGroup}>
                                <AddOutlinedIcon />
                                Add Medicine to Group
                            </button>
                        </div>
                    </div>
                </>
            )}
                <div className="success" style={success === true ? {opacity:'1'}:null}>
                    <img src={done} alt="" style={{marginRight:'10px'}}/>
                    <span>Medicine Added to Group</span>
                </div>
        </div>
    )
}

export default Groupdesc 
