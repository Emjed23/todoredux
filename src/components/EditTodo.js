
import React, { useState } from "react";
import {Button, Modal, Form} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/action/todoAction";
// import { getTodo } from "../redux/action/todoAction";
// import { useEffect } from 'react';

const EditTodo = ({el}) => {
    console.log(el)
    const [show, setShow] = useState(false);

    const [todo, setTodo] = useState(el.description)
    console.log(todo)

    const handleshow = () => setShow(!show);
    const dispatch=useDispatch()
    const edit=()=>{
dispatch(editTodo({id:el.task,description:todo}))
        // handleshow()
    }

    return (
        <>
            <Button style={{fontFamily: 'Just Another Hand', color:'black', backgroundColor:'white', border:'solid'}} variant="primary" onClick={handleshow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleshow}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily: 'Just Another Hand'}} >Edit My Todo</Modal.Title>
                </Modal.Header>
                <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="add todo ..."  value={todo} onChange={(e)=>setTodo(e.target.value)}  />
                </Form.Group>
            </Form>
                <Modal.Footer>
                    <Button style={{  fontFamily: 'Just Another Hand', color:'black', backgroundColor:'white', border:'solid'}} variant="secondary" onClick={handleshow}>
                        Close
                    </Button>
                    <Button style={{ fontFamily: 'Just Another Hand', color:'black', backgroundColor:'white', border:'solid'}} variant="primary" onClick={edit}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditTodo;

