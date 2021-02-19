import React, {useState, useEffect} from "react";
import FormContainer from "../layout/FormContainer";
import { Form, Button } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../layout/Loader"
import Message from "../layout/Message";
import {login} from '../../redux/actions/userAction'


export default function LoginScreen({history, location}) {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

/**
 *  Bring the dispatch and use
 */

 const dispatch = useDispatch()
 const userLogin = useSelector((state)=>state.userLogin)
 const {loading, error, userInfo} = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/";
  useEffect(()=>{
    if(userInfo && userInfo.name) {
      history.push(redirect)
    }
    else{
      history.push("/login")
    }
  },[userInfo, history, redirect])


const submitHander = (e)=>{
  e.preventDefault()
  dispatch(login(email, password))
}




  return (
    <FormContainer>
      <h1 className="py-5">Login</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader></Loader>}
      <Form onSubmit={submitHander}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </FormContainer>
  );
}
