import { Link } from "react-router-dom";
import "./Newuser.scss";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';

const Newuser = () => {
  return (
    <div className='newuser'>
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/User" style={{textDecoration:'none'}}>
                        <span>User Dashboard</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Add New User</span>
                </div>
                <span>Add new user to the system.</span>
            </div>
        </div> 
        <div className="body">
            <div className="tittle">
                <span>Add User</span>
            </div>
            <div className="con">
                <input type="text" className="required" placeholder="First Name"/>
                <input type="text" className="required" placeholder="Second Name"/>
                <input type="text" className="required" placeholder="Email"/>
                <input type="text" className="required" placeholder="ID Number"/>
                <input type="text" className="required" placeholder="Employee ID"/>
                <input type="text" placeholder="Gender"/>
                <input type="text" placeholder="Age"/>
                <input type="text" placeholder="Age"/>
                <input type="text" className="required" placeholder="Username"/>
                <input type="text" className="required" placeholder="Password"/>
                <button>save</button>
            </div>
        </div>
    </div>
  )
}

export default Newuser
