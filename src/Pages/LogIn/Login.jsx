import axios from "axios"
import {$baseURl} from '../../store/index'
import { useRecoilState } from "recoil";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const emailInput = useRef();
  const userPassword = useRef();
  const Navigate = useNavigate()
  const [baseURl] = useRecoilState($baseURl);


    const HandelSubit = (event)=>{
        event.preventDefault()
       axios.get(`${baseURl}api/app-users`,{
        params: {
        filters:{
          $and:[   
            
              {
                 User_Email :{
                 $eq: emailInput.current.value
            } 
          },

           { User_Password:{
            $eq: userPassword.current.value
            }
          },
          
          ],
        }
        }
       }).then((res) => {
        console.log(res.data)
        let  isActive =res.data.data[0].User_Active;
        let id = res.data.data[0].documentId;
        isActive ?  Navigate('/') : alert('is activ active');  
         !isActive ? Navigate(`/verfiy/${id}`)  : alert('is active')
        
       }).catch((ero)=>{        console.log(ero)       })

      
    }
  return (
    <div>
          <form className="w-100 text-center" onSubmit={HandelSubit}>       
        <input ref={emailInput} className="form-control" type="email" placeholder="Enter Youer Email"/>
        <input ref={userPassword} className="form-control"  placeholder="Enter Youer password"/>

        <button className="btn btn-primary" >login</button>
      </form>  
    </div>
  )
}
