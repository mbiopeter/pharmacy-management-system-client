import { useState } from "react";
import "./Newinvoice.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Newinvoice = () => {

    const items =[
        {
            name: "Paracetamol 500mg",
            quantity: 14,
            price:30, 
        },
        {
            name: "Ibuprofen 200mg",
            quantity: 2,
            price:30, 
        },
    ]
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };


    const handleMed = (id) => {
        
    }
    const handleProd = (id) => {

    }
    const handleEquip = (id) => {

    }

    const medicine = [
        {
            id: 1,
            name: 'Amozilin 200mg',
            img: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            qty: 230
        },
        {
            id: 2,
            name: 'Ibuprofen 400mg',
            img: 'https://images.pexels.com/photos/54283/pexels-photo-54283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 180
        },
        {
            id: 3,
            name: 'Paracetamol 500mg',
            img: 'https://images.pexels.com/photos/4500930/pexels-photo-4500930.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 300
        },
        {
            id: 4,
            name: 'Aspirin 75mg',
            img: 'https://images.pexels.com/photos/2467655/pexels-photo-2467655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 150
        },
        {
            id: 5,
            name: 'Loratadine 10mg',
            img: 'https://images.pexels.com/photos/3943936/pexels-photo-3943936.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 200
        },
        {
            id: 6,
            name: 'Omeprazole 20mg',
            img: 'https://images.pexels.com/photos/4527435/pexels-photo-4527435.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 220
        },
        {
            id: 7,
            name: 'Prednisone 5mg',
            img: 'https://images.pexels.com/photos/2467681/pexels-photo-2467681.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 270
        },
        {
            id: 8,
            name: 'Diazepam 5mg',
            img: 'https://images.pexels.com/photos/1616370/pexels-photo-1616370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 190
        },
        {
            id: 9,
            name: 'Atorvastatin 10mg',
            img: 'https://images.pexels.com/photos/4527422/pexels-photo-4527422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 210
        },
        {
            id: 10,
            name: 'Metformin 500mg',
            img: 'https://images.pexels.com/photos/4527440/pexels-photo-4527440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 240
        }
    ];

    const products = [
        {
            id: 1,
            name: 'Amozilin 200mg',
            img: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            qty: 230
        },
        {
            id: 2,
            name: 'Hand sanitizer',
            img: 'https://images.pexels.com/photos/3944133/pexels-photo-3944133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 100
        },
        {
            id: 3,
            name: 'Multivitamins',
            img: 'https://images.pexels.com/photos/430204/pexels-photo-430204.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 150
        },
        {
            id: 4,
            name: 'Blood pressure monitor',
            img: 'https://images.pexels.com/photos/417309/pexels-photo-417309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 70
        },
        {
            id: 5,
            name: 'First aid kit',
            img: 'https://images.pexels.com/photos/382556/pexels-photo-382556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 90
        },
        {
            id: 6,
            name: 'Digital thermometer',
            img: 'https://images.pexels.com/photos/3963725/pexels-photo-3963725.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 120
        },
        {
            id: 7,
            name: 'Face masks',
            img: 'https://images.pexels.com/photos/4050372/pexels-photo-4050372.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 200
        },
        {
            id: 8,
            name: 'Tissues',
            img: 'https://images.pexels.com/photos/429595/pexels-photo-429595.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 180
        },
        {
            id: 9,
            name: 'Disposable gloves',
            img: 'https://images.pexels.com/photos/3183189/pexels-photo-3183189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 150
        },
        {
            id: 10,
            name: 'Antibacterial wipes',
            img: 'https://images.pexels.com/photos/3174007/pexels-photo-3174007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 170
        }
    ];

    const equipments = [
        {
            id: 1,
            name: 'Amozilin 200mg',
            img: 'https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            qty: 230
        },
        {
            id: 2,
            name: 'Stethoscope',
            img: 'https://images.pexels.com/photos/163064/medical-appointment-doctor-healthcare-163064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 80
        },
        {
            id: 3,
            name: 'Blood pressure cuff',
            img: 'https://images.pexels.com/photos/208208/pexels-photo-208208.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 100
        },
        {
            id: 4,
            name: 'Oxygen tank',
            img: 'https://images.pexels.com/photos/2338575/pexels-photo-2338575.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 60
        },
        {
            id: 5,
            name: 'Hospital bed',
            img: 'https://images.pexels.com/photos/3985189/pexels-photo-3985189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 30
        },
        {
            id: 6,
            name: 'Surgical mask',
            img: 'https://images.pexels.com/photos/3985157/pexels-photo-3985157.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 150
        },
        {
            id: 7,
            name: 'Gloves',
            img: 'https://images.pexels.com/photos/434283/pexels-photo-434283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 120
        },
        {
            id: 8,
            name: 'Face shield',
            img: 'https://images.pexels.com/photos/2526103/pexels-photo-2526103.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 90
        },
        {
            id: 9,
            name: 'Thermometer',
            img: 'https://images.pexels.com/photos/3999657/pexels-photo-3999657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 110
        },
        {
            id: 10,
            name: 'Defibrillator',
            img: 'https://images.pexels.com/photos/433496/pexels-photo-433496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            qty: 40
        }
    ];


    const filteredMedicine = medicine.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredProducts = products.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredEquipments = equipments.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className='newinvoice'>
        <div className="left">
        <div className="upper">
            <div className="search">
                <SearchOutlinedIcon style={{paddingLeft:'20px'}}/>
                <input type="text" placeholder="Seach fro items" value={searchQuery} onChange={handleSearchInputChange}/>
            </div>
        </div>
        <div className="lower">
            {filteredMedicine.length > 0 && (
                <div className="heading">
                    <span>Medicine</span>
                </div>
            )}
            {filteredMedicine.map(medicine => {
                return(
                    <div className="container" key={medicine.id} onClick={() => handleMed(medicine.id)}>
                        <div className="med">
                            <img src={medicine.img} alt="" />
                            <div className="desc">
                                <span>{medicine.name}</span>
                                <span>{medicine.qty} pack</span>
                            </div>
                        </div>
                        <div className="tick">
                            <DoneOutlineOutlinedIcon style={{fontWeight:'bold',color:'#00ff00'}}/>
                        </div>
                    </div>  
                )             
            })}
            {filteredProducts.length > 0 && (
                <div className="heading">
                    <span>Health Products</span>
                </div>
             )}
            {filteredProducts.map(product => {
                return(
                    <div className="container" key={product.id} onClick={() => handleProd(product.id)}>
                        <div className="med">
                            <img src={product.img} alt="" />
                            <div className="desc">
                                <span>{product.name}</span>
                                <span>{product.qty} pack</span>
                            </div>
                        </div>
                        <div className="tick">
                            <DoneOutlineOutlinedIcon style={{fontWeight:'bold',color:'#00ff00'}}/>
                        </div>
                    </div>
                )
            })}
            {filteredEquipments.length > 0 && (
                <div className="heading">
                    <span>Equipments</span>
                </div>
            )}
            {filteredEquipments.map(equipment => {
                return(
                    <div className="container" key={equipment.id} onClick={() => handleEquip(equipment.id)}>
                        <div className="med">
                            <img src={equipment.img} alt="" />
                            <div className="desc">
                                <span>{equipment.name}</span>
                                <span>{equipment.qty} pack</span>
                            </div>
                        </div>
                        <div className="tick">
                            <DoneOutlineOutlinedIcon style={{fontWeight:'bold',color:'#00ff00'}}/>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        <div className="right">
            <div className="heading">
                <span>Cart($40)</span>
                <div className="key">
                    <div className="menu">
                        <span>price</span>
                    </div>                 
                    <div className="menu">
                        <span>Discount</span>
                    </div>               
                    <div className="menu">
                        <span>Quantity</span>
                    </div>
                    
                </div>
            </div>
            {items.map((item, index) => (
                <div key={index} className="container">
                    <div className="med">
                        <img src="https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div className="desc">
                            <span>{item.name}</span>
                            <span>{item.quantity} pack</span>
                        </div>
                    </div>
                    <div className="adj">
                        <input type="text"  />
                        <input type="text"  />
                        <input type="text"  autoFocus/>
                        <DeleteOutlineOutlinedIcon style={{color:'red', cursor:'pointer',fontSize:'30px'}}/>
                    </div>
                </div>
            ))}
            <div className="pay">
                <div className="tot">
                    <span>Subtotal</span>
                    <span>$40</span>
                </div>
                <div className="tot">
                    <span>Discount</span>
                    <span>$5</span>
                </div>
                <div className="tot">
                    <span>Total</span>
                    <span>$35</span>
                </div>
                <div className="inp">
                    <input type="text" placeholder="Customer name"/>
                </div>
                <div className="inp">
                    <input type="text" placeholder="Phone number"/>
                </div>
                <div className="inp">
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="btn">
                    <button>Pay $35</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newinvoice
