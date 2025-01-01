import axios from "axios";
import { useRef } from "react"
import { useRecoilState } from "recoil";
import {$baseURl} from '../../store/index'

export default function Register() {
    const userNameInput = useRef();
    const emailInput = useRef();
    const userPassword = useRef();
    const matchInput = useRef();
    const userPhone = useRef();
    const [baseURl] = useRecoilState($baseURl);

    const HandelSubit = (event)=>{
        event.preventDefault()

        let userName = userNameInput.current.value;
        let email = emailInput.current.value;
        let password = userPassword.current.value;
        let match = matchInput.current.value;
        let phone = userPhone.current.value;


 // valideta
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let emailTest =  emailRegex.test(email) || 'email is invalied';
let PasswordTest =  strongPasswordRegex.test(password) || 'password is invalied';
let matchTest = (match == password) || 'match is invalied';

if(emailTest + PasswordTest + matchTest == 3){
    let code = Math.floor(100000 + Math.random() * 900000) ;
    axios.post(`${baseURl}api/app-users`,
        {
     data:{
            User_Name:userName,
            User_Email :email ,
            User_Password: password ,
            User_Phone:phone,
            User_Code : String(code) 
     }
            
        }).then((res) => {
let userId = res.data.data.documentId

            axios.post('https://easetasks.com/mail/index.php/api/mail/send' , {

                    "email_to":email,
                    "email_subject": "Mail verfiaction",
                    "email_msg": `Welcome  ${userName} youer cod is ${code} please press on the link   http://localhost:5174/verfiy/${userId}`

            }).then(()=>{

                alert('check your email')
            })
            console.log(res)
        }).catch((error) => {
            console.log()
            alert(error)
            console.log(error)
        })

}else{
    console.log(emailTest)
    console.log(PasswordTest)
    console.log(matchTest)
}
       


    }
  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center', }}>
 
      <form className="w-100 text-center" onSubmit={HandelSubit}>       
        <input ref={userNameInput} className="form-control"  placeholder="Enter Youer Name"/>
        <input ref={emailInput} className="form-control" type="" placeholder="Enter Youer Email" required/>
        <input ref={userPassword} className="form-control" type="" placeholder="Enter Youer Password" required/>
        <input ref={matchInput} className="form-control" type="" placeholder="Enter Youer match Password" required/>
        <input ref={userPhone} className="form-control"  placeholder="Enter Youer Phone"/>

<button className="btn btn-dark" >Register</button>
      </form>    
      </div>
  )
}
