import React from 'react';
import AbsLogo from '../assets/favicon.png';
import {BsPeopleFill} from 'react-icons/bs';
const AmPm = (num) =>{
    if(num>=12 || num<=23){
        return "AM";
    }else{
        return "PM";
    }
}

const getdate = () =>{
    const date = new Date();
    const Days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const Months = ['Jan','feb','Mar','Apr','May','Jun','Jul','Aug','Sept','oct','Nov','Dec'];
    const Todaydate = `${(Math.abs((date.getHours())-12))}:${date.getMinutes()} ${AmPm(date.getHours())} • ${Days[date.getDay()]},${Months[date.getMonth()]} ${date.getDate()}` ;
    return Todaydate;
}

const openPeople = () =>{
    
}

const Nav = () => {
  return (
    <div  className='edit-navbar'>
        <div style={{
        display:"flex",
        justifyContent:"end",
        alignItems: 'center'
        }}>
        <div>
        <p style={{
            margin: '12px'
        }} >{getdate()}</p>
        </div>
        <div>
        <BsPeopleFill style={{
            fontSize: '25px',
            margin: '12px',
            cursor: 'pointer'
        }}
        onClick={openPeople}
        />
        </div>
        </div>
        
    </div>
  )
}

export default Nav