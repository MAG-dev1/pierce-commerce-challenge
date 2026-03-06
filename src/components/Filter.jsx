import React, { Children, useEffect, useRef, useState } from 'react';
import '../css/popup.css'
import ReactDOM from 'react-dom';
import Popup from './Popup';
export default function Filter({ minvalue, maxvalue, onClose, setmaxvalue, setminvalue, name, setname }) {



    return (
        <>
            <Popup onClose={onClose}>

                <div>
                    <p >Name</p>
                    <input type="text" name='name' value={name} id='name' onChange={(e) => setname(e.target.value)} />
                </div>
                <div>
                    <p>MaxPrice</p>
                    <input type="number" name="maxprice" value={maxvalue} id="maxprice" onChange={(e) => setmaxvalue(e.target.value)} />
                </div>
                <div className='mb-5'>
                    <p >MinPrice</p>
                    <input type="number" name='minprice' value={minvalue} id='minprice' onChange={(e) => setminvalue(e.target.value)} />
                </div>

                <button onClick={onClose}>Submit</button>

            </Popup>


        </>


    );
}