import "./Newmed.scss";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { Link } from "react-router-dom";
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useState } from "react";

const Newmed = () => {
  const [inputMedicine, setInputMedicine] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const medicines = [
    {
        id:1,
        name:'Amoziline 500mg'
    },
    {
        id:2,
        name:'Amoxycillin 250mg'
    },
    {
        id:3,
        name:'Paracetamol 500mg'
    },
    {
        id:4,
        name:'Ibuprofen 400mg'
    },
    {
        id:5,
        name:'Omeprazole 20mg'
    },
    {
        id:6,
        name:'Aspirin 100mg'
    },
    {
        id:7,
        name:'Ciprofloxacin 500mg'
    },
    {
        id:8,
        name:'Lisinopril 10mg'
    }
  ];
  const Categories = [
    {
        id:1,
        name:'Medicine',
    },
    {
        id:1,
        name:'Equipments',
    },
    {
        id:1,
        name:'Health Products',
    }
  ]
  
    const handleMedicineInputChange = (e) => {
        setInputMedicine(e.target.value);
         setSelectedMedicine(''); 
    };

    const filteredMedicine = inputMedicine.trim() !== '' ? medicines.filter(item =>
        item.name.toLowerCase().includes(inputMedicine.toLowerCase())
    ) : [];

  const handleMedicineSelect = (medicine) => {
    setInputMedicine(medicine);
    setSelectedMedicine(medicine);
  };

    const handleCategoryInputChange = (e) => {
        setInputCategory(e.target.value);
         setSelectedCategory(''); 
    };

    const filteredCategory = inputCategory.trim() !== '' ? Categories.filter(item =>
        item.name.toLowerCase().includes(inputCategory.toLowerCase())
    ) : [];

  const handleCategorySelect = (Category) => {
    setInputCategory(Category);
    setSelectedCategory(Category);
  };

  return (
    <div className='newmed'>
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/Inventory" style={{textDecoration:'none'}}>
                        <span>Inventory</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <Link to="/Inventory/List" style={{textDecoration:'none'}}>
                        <span>List of Medicines</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Add New Medicine</span>
                </div>
                <div style={{width:'200%'}}>
                    <span>All fields are mandatory, unless mentioned as (optional)</span>
                </div>
            </div>
        </div>
        <form >
            <div className="con">
                <div className="head">
                    <div className="button"><AddOutlinedIcon /> Add Supplier</div>
                    <div className="button"><AddOutlinedIcon /> Add Category</div>
                    <input type="file" id="csv" style={{ display: 'none' }} accept=".csv" />
                    <label htmlFor="csv">
                        <div className="button"><ListOutlinedIcon /> Import Medicine (CSV)</div>
                    </label>

                </div>
                <div className="body">
                    <div className="header">
                        <span>Medicine Name</span>
                    </div>
                    <div className="form">
                        <div className="column">
                            <div className="formControl">
                                <div className="span">Medicine Name</div>
                                <input type="text" value={inputMedicine} onChange={handleMedicineInputChange}/>
                                <div className="select">
                                    <ul style={{ display: selectedMedicine ? 'none' : 'block' }}>
                                        {filteredMedicine.map((medicine) => (
                                            <li key={medicine.id} onClick={() => handleMedicineSelect(medicine.name)}>
                                            {medicine.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="formControl">
                                <div className="span">Quantity</div>
                                <input type="text" />
                            </div>
                            <div className="formControl">
                                <div className="span">Category</div>
                                <input type="text" value={inputCategory} onChange={handleCategoryInputChange}/>
                                <div className="select">
                                    <ul style={{ display: selectedCategory ? 'none' : 'block' }}>
                                        {filteredCategory.map((category) => (
                                            <li key={category.id} onClick={() => handleCategorySelect(category.name)}>
                                            {category.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="formControl">
                                <div className="span">Shelf Number</div>
                                <input type="text" />
                            </div>
                            <div className="formControl">
                                <div className="span">Unit</div>
                                <input type="text" />
                            </div>

                        </div>
                        <div className="column">
                            <div className="formControl">
                                <div className="span">Generic Name</div>
                                <input type="text" />
                            </div>
                            <div className="formControl">
                                <div className="span">Expiery Date</div>
                                <input type="date" />
                            </div>
                            <div className="formControl">
                                <div className="span">How to use</div>
                                <textarea></textarea>
                            </div>
                            <div className="formControl">
                                <div className="span">Side effects</div>
                                <textarea></textarea>
                            </div>
                            <div className="formControl">
                                <div className="span">Image</div>
                                <input type="file" accept=".images"/>
                            </div>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <td>Sale Price<span>*</span></td>
                            <td>Supplier Price<span>*</span></td>
                            <td>Group<span>*</span></td>
                            <td>Tax<span>*</span></td>
                            <td>Supplier<span>*</span></td>
                        </thead>
                        <tbody>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <input type="text" />
                            </td>
                        </tbody>
                    </table>
                </div>
            </div>
        </form>   
    </div>
  )
}

export default Newmed
