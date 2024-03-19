import { useEffect, useState } from "react";
import "./Datatable.scss";
import next from "../../assets/Group 22.png";
import { Link } from "react-router-dom";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Switch from "../switch/Switch";

const Datatable = ({ data, itemsPerPage,type,handleOptions,options,optionsId   }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    const totalPagesCount = Math.ceil(data.length / itemsPerPage);
    setTotalPages(totalPagesCount);
    setCurrentItems(data.slice(0, itemsPerPage));
  }, [data, itemsPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const startIndex = (currentPage + 1 - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(data.slice(startIndex, endIndex));
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const startIndex = (currentPage - 1 - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setCurrentItems(data.slice(startIndex, endIndex));
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(data.slice(startIndex, endIndex));
  };

  return (
    <div className="datatable">
      <table>
        <thead>
          {type === 'medicine' && (
            <tr>
              <th>Medicine Name</th>
              <th>Medicine ID</th>
              <th>Group Name</th>
              <th>Stock in Qty</th>
              <th>Action</th>
            </tr>
          )}
          {type === 'group' &&(
            <tr>
              <th>Group Name</th>
              <th>No of Medicines</th>
              <th>Action</th>
            </tr>
          )}
          {type === 'groupId' &&(
            <tr>
              <th>Group Name</th>
              <th>No of Medicines</th>
              <th>Action</th>
            </tr>
          )}
          {type === 'Invoice' &&(
            <tr>
              <th>Invoice ID</th>
              <th>Client Name</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Invoice Amaunt</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          )}
          {type === 'Role' &&(
            <tr style={{color: '#FFF', background:'#444'}}>
              <th>ACTION</th>
              <th>PERMISSIONS</th>
            </tr>
          )}
          {type === 'userdashboard' &&(
            <tr>
              <th>Name</th>
              <th></th>
              <th>Create Date</th>
              <th>Action</th>
            </tr>
          )}
        </thead>
        <tbody>
          {type === 'medicine' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.MedicineName}</td>
              <td>{item.MedicineId}</td>
              <td>{item.GroupName}</td>
              <td>{item.stockInQty}</td>            
              <td style={{cursor:'pointer'}}>
                <Link to={`/Inventory/List/${item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                  {item.Action}<img src={next} style={{marginLeft:'10px'}} alt=""/>
                </Link>
              </td>
            </tr>
          ))}
          {type === 'group' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.GroupName}</td>
              <td>{item.count}</td>     
                <td style={{cursor:'pointer'}}>
                  <Link to={`/Inventory/Group/${item.id}`} style={{textDecoration:'none', color:'inherit'}}>
                    {item.Action}
                    <img src={next} style={{marginLeft:'10px'}} alt=""/>
                  </Link>
                </td>
            </tr>
          ))}
          {type === 'groupId' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.GroupName}</td>
              <td>{item.count}</td>   
                <td style={{cursor:'pointer',color:'red', display:'flex', alignItems:'center'}}>
                  <DeleteOutlinedIcon style={{fontSize:'20px', marginRight:'10px'}}/>
                  {item.Action}
                </td>
            </tr>
          ))}
          {type === 'Invoice' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.client}</td>   
              <td>{item.start}</td>   
              <td>{item.end}</td>   
              <td>{item.amount}</td>   
              <td > <span style={(item.status === 'Paid') ? { borderRadius:'10px',backgroundColor:'#00ff00', paddingLeft:'10px', paddingRight:'10px'}:{borderRadius:'10px',backgroundColor:'#eb6134', paddingLeft:'10px', paddingRight:'10px'}}>{item.status}</span></td>   
              <td style={{display:'flex', alignItems:'center',flexDirection:'row',gap:'20px'}}>
                <span>Download</span>
                <span>
                  <DeleteOutlineOutlinedIcon style={{color:'red'}}/>
                </span>
              </td>
            </tr>
          ))}
          {type === 'Role' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>   
              <td>
                <Switch />
              </td>
            </tr>
          ))}
          {type === 'userdashboard' && currentItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div style={{display:'flex',flexDirection:'column'}}>
                  <span style={{fontWeight:500}}>{item.name}</span>
                  <span style={{fontSize:"12px",color:'#ccc'}}>{item.email}</span>
                </div>
              </td> 
              <td>
                <span style={{paddingLeft:'10px',paddingRight:'10px', borderRadius:'15px',backgroundColor:'#4A85F6',fontSize:'12px',color:'#FFFFFF',paddingTop:'2px',paddingBottom:'2px'}}>{item.role}</span>
              </td>   
              <td>{item.createDate}</td>   
              <td>
                <BorderColorOutlinedIcon onClick={() => handleOptions(item.id)} style={{color:'#E5E5E5',marginRight:'20px',cursor:'pointer'}}/>
                {options === true && optionsId == item.id && (
                  <div className="float">
                    <div className="point"></div>
                    <Link to={`/User/Role/${item.id}`} style={{textDecoration:'none', color:'inherit',display:'flex', alignItems:'center'}}>
                      <div className="container" style={{borderBottom:' 0.2px solid #595d5d'}}>
                        <BorderColorOutlinedIcon style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                        <span>User Role</span>
                      </div>
                    </Link>
                    <Link to={`/User/Edit/${item.id}`} style={{textDecoration:'none', color:'inherit',display:'flex', alignItems:'center'}}>
                      <div className="container">
                        <BorderColorOutlinedIcon style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                        <span >Edit User</span>
                      </div>
                    </Link>
                  </div>
                )}
                <DeleteOutlineOutlinedIcon style={{color:'#E5E5E5',cursor:'pointer'}}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="paggination" style={type === 'Role' ? {width:'50%'}: null}>
        <div onClick={() => goToPage(1)} disabled={currentPage === 1}>First</div>
        <div onClick={prevPage} disabled={currentPage === 1}>Previous</div>
        <span>{currentPage} of {totalPages}</span>
        <div onClick={nextPage} disabled={currentPage === totalPages}>Next</div>
        <div onClick={() => goToPage(totalPages)} disabled={currentPage === totalPages}>Last</div>
      </div>
    </div>
  );
};

export default Datatable;
