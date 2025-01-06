// import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login.jsx'
import Dashboard from './components/Dashboard.jsx'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { userDetails,userTodo } from './store/counterSlice.js';
import axios from 'axios';
import Home from './components/Home.jsx';
import Todopage from './components/Todopage.jsx';
function App() {
  const dispatch = useDispatch()
  const email = localStorage.getItem('email')

  const handleUser = async (e) => {
    try {
      if (email) {
        const response = await axios.post('http://localhost:8080/api/v1/get-login', { email })
        if (response.data.success) {
          dispatch(userDetails(response.data.result))
          // console.log(response.data.result)
        }
      }
    } catch (err) {
      console.log(err.message)
    }
  };
  useEffect(() => {
    handleUser()
  }, []);

  const fetchTodo = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/v1/get-todo')
        if (response.data.success) {
          dispatch(userTodo(response.data.result))
          // console.log(response.data.result)
        }
    } catch (err) {
      console.log(err.message)
    }
  };
  useEffect(() => {
    fetchTodo()
  }, []);
  
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/dashboard/todo-page' element={<Todopage />}></Route>
    </Routes>
  )
}

export default App
