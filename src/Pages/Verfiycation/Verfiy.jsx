import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import {$baseURl} from '../../store/index'

export default function Verfiy() {
    const num1 = useRef();
    const num2 = useRef();
    const num3 = useRef();
    const num4 = useRef();
    const num5 = useRef();
    const num6 = useRef();

    const [userCode , setUserCode] = useState(0);


    const params = useParams();
    let id = params.documentId;
    const [baseURl] = useRecoilState($baseURl);
    useEffect(()=>{

axios.get(`${baseURl}api/app-users/${id}`).then((res)=>{
    console.log(res.data.data.User_Code)
    let usercode=res.data.data.User_Code
    setUserCode(usercode);
    
})

    }
    ,[])
const VerfiyCode = () => {
    let num1Val = num1.current.value;
    let num2Val = num2.current.value;
    let num3Val = num3.current.value;
    let num4Val = num4.current.value;
    let num5Val = num5.current.value;
    let num6Val = num6.current.value;
    if( num1Val + num2Val + num3Val + num4Val + num5Val +num6Val == userCode) {


        
    }else{
    alert('code is not seucses');

}

}

    const CheckAll = ()=>{
        let num1Val = num1.current.value;
        let num2Val = num2.current.value;
        let num3Val = num3.current.value;
        let num4Val = num4.current.value;
        let num5Val = num5.current.value;
        let num6Val = num6.current.value;
        if(num1Val && num2Val && num3Val && num4Val && num5Val && num6Val){

            VerfiyCode();
        }

    }
  return (
    <div>
    <h1>enter your verfiy</h1>
      <form className='form-control d-flex  gap-3' >
        <input ref={num1} className='form-control' maxLength={1} onChange={CheckAll} />
        <input ref={num2} className='form-control' maxLength={1}   onChange={CheckAll}/>
        <input ref={num3} className='form-control' maxLength={1}   onChange={CheckAll}/>
        <input ref={num4} className='form-control' maxLength={1}   onChange={CheckAll}/>
        <input ref={num5} className='form-control' maxLength={1}   onChange={CheckAll}/>
        <input ref={num6} className='form-control' maxLength={1}   onChange={CheckAll}/>

      </form>
    </div>
  )
}
