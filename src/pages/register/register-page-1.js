import React, { useState } from 'react'
import { FormButton, FormContainer, FormHeader, FormInput, Formwrapper, RegisterContainer } from './RegisterElements'
// import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import {MdOutlineDriveFolderUpload} from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import  Axios  from 'axios';



const Register1 = () => {

  // const [file, setFile] = useState("");
  const [fullname, setFullname] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [registerStatus, setRegisterStatus] = useState('')
  const navigate = useNavigate()

  const More = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/sign-up", {
      fullname: fullname,
      phone: phone,
      address: address,
    }).then((response) => {
      if(response.data.message){
        setRegisterStatus(response.data.message)
      }else{
        setRegisterStatus(navigate('/success'))
      }
    })
  }

  return (
    <>
    <RegisterContainer/>
    <FormContainer>
        <FormHeader>Tell us a little more about yourself</FormHeader>
        <Formwrapper>
          <FormInput placeholder='Full Name' onChange={(e) => {setFullname(e.target.value)}}/>
          <FormInput placeholder='Phone Number' onChange={(e) => {setPhone(e.target.value)}}/>
          <FormInput placeholder='Address' onChange={(e) => {setAddress(e.target.value)}}/>
        
          <div className="formImage">
                <label htmlFor="file">
                  Avatar (optional): <MdOutlineDriveFolderUpload className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  // onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
          <FormButton onClick={More}>Next</FormButton>
          {registerStatus}
        </Formwrapper>
    </FormContainer>
    </>
  )
}

export default Register1