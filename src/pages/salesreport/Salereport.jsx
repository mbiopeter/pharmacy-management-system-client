import { useState } from "react";
import "./Salereport.scss";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import {FaRegFileExcel } from "react-icons/fa";
import { AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-router-dom";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import MedicationLiquidOutlinedIcon from '@mui/icons-material/MedicationLiquidOutlined';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import Pieanimation from "../../components/piechart/Piechart";
import Linechart from "../../components/linechart/Linechart";
import Barchart from "../../components/barchart/Barchart";
import Areachart from "../../components/areachart/Areachart";
import Gaugechart from "../../components/gaugechart/Gaugechart";
import Candlestick from "../../components/candlestick/Candlestick";
import Heatmap from "../../components/heatmap/Heatmap";

const Salereport = () => {

    const [download, setDownload] = useState(false)

    const lineY = [{ data: [1, 2, 3, 5, 8, 10] }]
    const lineData = [
        {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            label: 'Loyal   ',
        },
        {
            data: [3, 3.5, 5, 1.5, 4.5, 8],
            label: 'New    ',
        },
        {
            data: [0, 7.5, 3, 6.5, 10.5, 1],
            label: 'Unique  ',
        },
    ];

    const barX =['Q1', 'Q2', 'Q3']
    const barData = [
        { data: [35, 44, 24, 34], label: 'Mpesa'},
        { data: [51, 6, 49, 30], label: 'Equity' },
        { data: [15, 25, 30, 50], label: 'Cash' },
    ];

    const AreaDatax = [0, 2, 3, 5, 8, 10];
    const AreaData = [0, 5.5, 2, 8.5, 1.5, 5];
    const Gauge =0.70


  return (
    <div className='salereport'>
        {download === true && (
            <div className="overlayer" onClick={() => setDownload(false)}></div>
        )}
        <div className="head">
            <div className="tittle">
                <div className="path">
                    <Link to="/Reports" style={{textDecoration:'none'}}>
                        <span>Reports</span>
                    </Link>
                    <NavigateNextOutlinedIcon  style={{fontSize:'20px'}}/>
                    <span>Sale Report</span>
                </div>
                <span>Sale related report of pharmacy.</span>
            </div>
        </div> 
        <div className="widgets">

            <div className="one widget">
                <div className="tittle">
                    <div className="span" style={{display:'flex', flexDirection:'column'}}>
                        <span style={{display:'flex', alignItems:'center'}}>Today's Sales <KeyboardArrowDownOutlinedIcon style={{fontSize:'20px'}} /></span>
                        <span style={{fontSize:'12px',fontWeight:'200'}}>sales Summary</span>
                    </div>
                    <div className="btn">
                        <button onClick={() => setDownload(true)}>Export <FileUploadOutlinedIcon  style={{fontSize:'20px',paddingRight:'10px'}}/></button>
                        {download === true && (
                            <div className="float" >
                            <div className="point"></div>
                            <div className="container" style={{borderBottom:' 0.2px solid #595d5d'}}>
                                <FaRegFileExcel style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                                <span>Excel</span>
                            </div>
                            <div className="container">
                                <AiOutlineFilePdf style={{fontSize:'22px',marginLeft:'10px', marginRight:'10px'}}/>
                                <span >PDF</span>
                            </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="subwidgets">
                    <div className="subwidget">
                        <div className="con" style={{backgroundColor:'rgba(255, 132, 0, 0.774)'}}>
                            <AccountBalanceWalletOutlinedIcon style={{color:'#FFFFFF'}}/>
                        </div>
                        <span>$1K</span>
                        <span>Total Sales</span>
                        <span>+8% from yesterday</span>
                    </div>
                    <div className="subwidget">
                        <div className="con" style={{backgroundColor:'rgba(215, 49, 7, 0.599)'}}>
                            <BorderColorOutlinedIcon style={{color:'#FFFFFF'}}/>
                        </div>
                        <span>300</span>
                        <span>Total Orders</span>
                        <span>+5% from yesterday</span>
                    </div>
                    <div className="subwidget">
                        <div className="con" style={{backgroundColor:'rgba(7, 215, 21, 0.599)'}}>
                            <MedicationLiquidOutlinedIcon style={{color:'#FFFFFF'}}/>
                        </div>
                        <span>123</span>
                        <span>Items Sold</span>
                        <span>-2% from yesterday</span>
                    </div>
                    <div className="subwidget">
                        <div className="con" style={{backgroundColor:'rgba(170, 0, 255, 0.595)'}}>
                            <Person3OutlinedIcon style={{color:'#FFFFFF'}}/>
                        </div>
                        <span>08</span>
                        <span>New Customers</span>
                        <span>+0.5% from yesterday</span>
                    </div>
                </div>
            </div>

            <div className="two widget">
                <div className="tittle">
                    <span>Patient Insight</span>
                </div>
                <div className="container">
                    <Linechart lineX={lineY} lineData={lineData}/>
                </div>
            </div>

            <div className="three widget">
                <div className="tittle">
                    <span>Total Revenue</span>
                </div>
                <div className="container">
                    <Barchart barX={barX} barData={barData} />               
                </div>
            </div>

            <div className="four widget">
                <div className="tittle">
                    <span>Sales per day</span>
                </div>
                <div className="container">
                    <Areachart AreaDatax={AreaDatax} AreaData={AreaData}/>
                </div>
            </div>

            <div className="five widget">
                <div className="tittle">
                    <span>Customers Satisfaction</span>
                </div>
                <div className="container">
                    <Gaugechart Gauge={Gauge} />
                </div>
            </div>
            <div className="six widget">
                <Candlestick />
            </div>
            <div className="seven widget">
                <div className="tittle">
                    <span>Most selling items</span>
                </div>
                <div className="container">
                    <Pieanimation />
                </div>
            </div>
            <div className="eight widget">
                <Heatmap />
            </div>
        </div>
    </div>
  )
}

export default Salereport
