import React, { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const BACKEND_API = import.meta.env.VITE_BACKEND_API

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const response = await fetch(`${BACKEND_API}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      const data = await response.json()
      if (data.token) {
        localStorage.setItem('token', data.token)
        setMessage('Login successful!')
        // Optionally redirect or update UI
      } else {
        setMessage(data.msg || 'Login failed')
      }
    } catch (err) {
      setMessage('Network error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
      padding: '40px 0',
    }}>
      <form onSubmit={handleSubmit} style={{
        background: '#fff',
        borderRadius: 18,
        boxShadow: '0 4px 24px 0 rgba(60,72,100,0.10)',
        padding: '40px 36px',
        minWidth: 340,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <h1 style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 700,
          fontSize: '2rem',
          color: '#3730a3',
          marginBottom: 28,
        }}>
          Login
        </h1>
        <div style={{width: '100%', marginBottom: 18}}>
          <label style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            color: '#4f46e5',
            marginBottom: 6,
            display: 'block',
          }}>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
              fontFamily: 'Poppins, sans-serif',
              marginTop: 4,
              outline: 'none',
              marginBottom: 2,
              background: '#f8fafc',
              transition: 'border 0.2s',
            }}
            disabled={loading}
          />
        </div>
        <div style={{width: '100%', marginBottom: 28}}>
          <label style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            color: '#4f46e5',
            marginBottom: 6,
            display: 'block',
          }}>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              fontSize: '1rem',
              fontFamily: 'Poppins, sans-serif',
              marginTop: 4,
              outline: 'none',
              marginBottom: 2,
              background: '#f8fafc',
              transition: 'border 0.2s',
            }}
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          style={{
            background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '1.1rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            boxShadow: '0 2px 8px 0 rgba(60,72,100,0.08)',
            transition: 'background 0.2s',
            opacity: loading ? 0.7 : 1,
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'linear-gradient(90deg, #818cf8 0%, #6366f1 100%)'}
          onMouseLeave={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)'}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
        {message && (
          <div style={{
            marginTop: 18,
            color: message === 'Login successful!' ? '#22c55e' : '#ef4444',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            textAlign: 'center',
          }}>{message}</div>
        )}
      </form>
    </div>
  )
}

export default Login
