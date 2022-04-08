import React from 'react';
import AbsLogo from '../assets/favicon.png';
import {RiFeedbackLine} from 'react-icons/ri';
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

const Nav = () => {
  return (
    <div style={{
        display:"flex",
        justifyContent:"space-between",
        marginLeft:"20px",
        marginRight:"20px",
        alignItems: 'center'
    }}>
        <div>
            <img src={AbsLogo} alt="logo" width='80px' />
        </div>
        <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems: 'center'
        }}>
        <div>
        <p style={{
            margin: '12px'
        }} >{getdate()}</p>
        </div>
        <div>
        <RiFeedbackLine style={{
            fontSize: '25px',
            margin: '12px',
            cursor: 'pointer'
        }}
        />
        </div>
        </div>
        
    </div>
  )
}

export default Nav