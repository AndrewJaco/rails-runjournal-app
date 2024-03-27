import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../constants.js';

function Signup() {
  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(accountInfo.password !== accountInfo.confirmPassword) {
      alert('Passwords do not match')
      return
    } else {
      const response = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({user: {
          email: accountInfo.username,
          password: accountInfo.password,
          password_confirmation: accountInfo.confirmPassword
        }})
      });

      const data = await response.json()

      if (response.ok) {
        //const {id} = data
        navigate('/')
      } else {
          alert(data.error)
          setAccountInfo({
            username: '',
            password: '',
            confirmPassword: ''
          })
      }
    }
  }

  return (
    <div>
      <div>Create an Account</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username</label>
          <input 
            id='username'
            type='text'
            value={accountInfo.username}
            onChange={e => setAccountInfo({...accountInfo, username: e.target.value})}
            />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input 
            id='password' 
            type='password'
            onChange={e => setAccountInfo({...accountInfo, password: e.target.value})}
            value={accountInfo.password}
            />
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input 
            id='confirmPassword' 
            type='password' 
            onChange={e => setAccountInfo({...accountInfo, confirmPassword: e.target.value})}
            value={accountInfo.confirmPassword}
            />
        </div>
        <div>
          <button 
            type='submit' 
            disabled={accountInfo.password!==accountInfo.confirmPassword}>
            Sign up
          </button>
        </div>
      </form>

    </div>
  )
}

export default Signup