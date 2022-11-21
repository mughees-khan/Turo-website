import "./home.css"
import { AiOutlineBars } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import React from 'react';
import { CopyOutlined } from '@ant-design/icons';
import {
    AutoComplete,
    Button,
    Cascader,
    Col,
    DatePicker,
    Input,
    InputNumber,
    Row,
    Select,
    Tooltip,
} from 'antd';

function Home() {
    return (
        <div>
            <div className="header">
                <div className="header-left-side">
                    <img src="../../images/turo-logo.png" />
                </div>
                <div className="header-right-side">
                    <div ><AiOutlineBars className="header-icons" /></div>
                    <div >< IoMdContact className="header-icons" /></div>
                </div>
            </div>
            <div className="main-home">
                <img className="main-image" src="https://resources.turo.com/f/81934/992x400/201b368107/hp_ny_992x400_2.jpg" />
            </div>
            <div className="search">
                <div></div>
                <div>
                    <DatePicker
                        style={{
                            width: '50%',
                        }}
                    />

                </div>
                <div></div>
                <img />
            </div>
        </div>

    )
}

export default Home;