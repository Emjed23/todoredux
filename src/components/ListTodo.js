import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/action/todoAction';
import EditTodo from './EditTodo';

const ListTodo = () => { 
    const {todos}=useSelector(state=>state)
    const dispatch=useDispatch()
// dispatch(deleteTodo({id:el.task,description:todos}))
//         handleshow()
    
      
  return (
    <div className='alltodo'>
    {todos.map((item) => (
      <Card key={item.Task} className='card'>
        <Card.Body>
          <Card.Title>{item.Task}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <EditTodo el={item} />
          <Button variant="danger"  onClick={()=>dispatch(deleteTodo({id:item.id,description:todos}))}>delete</Button>
        </Card.Body>
      </Card>
    ))  }
  </div>
  );
  }

export default ListTodo;