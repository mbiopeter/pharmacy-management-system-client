import "./Profile.scss";
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Profile = () => {
  return (
    <div className='profile'>
        <div className="header">
            <Person2OutlinedIcon style={{fontSize:'35px'}}/> <span>Profile</span>
        </div>
        <div className="container">
            <div className="heading">
                <span>Profile Information</span>
            </div>
            <div className="body">
                <div className="left">
                    <img src="https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Anne Smith</span>
                    <span><LocationOnOutlinedIcon style={{fontSize:'25px', paddingRight:'5px'}}/>Nairobi Kenya, Westlands</span>
                    <span><Person2OutlinedIcon style={{fontSize:'25px', paddingRight:'5px'}}/> Cashier</span>
                    <span><OpenInNewOutlinedIcon style={{fontSize:'25px', paddingRight:'5px'}}/>www.facebook.com</span>
                </div>
                <div className="right">
                    <div className="tittle">
                        <span><Person2OutlinedIcon style={{paddingRight:'5px',fontSize:'20px'}}/>Profile Information</span>
                    </div>
                    <div className="det">
                        <div className="twoControl">
                            <span>Full Name *</span>
                            <div className="subtwo">
                                <input className="two" type="text" placeholder="First Name"/>
                                <input className="two" type="text" placeholder="Last Name"/>
                            </div>
                        </div>
                        <div className="formControl">
                            <span>Email</span>
                            <input type="text" placeholder="support@gmail.com"/>
                        </div>
                        <div className="formControl">
                            <span>Contact</span>
                            <input type="text" placeholder="0712345678"/>
                        </div>
                    </div>
                    <div className="tittle">
                        <span><Person2OutlinedIcon style={{paddingRight:'5px',fontSize:'20px'}}/>Profile Information</span>
                    </div>   
                    <div className="det">
                        <div className="formControl">
                            <span>Email</span>
                            <input type="text" placeholder="support@gmail.com"/>
                        </div>
                        <div className="formControl">
                            <span >Contact</span>
                            <input type="text" placeholder="0712345678"/>
                        </div>                       
                    </div>     
                    <div className="btn">
                        <button>Submit</button>
                    </div>           
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
