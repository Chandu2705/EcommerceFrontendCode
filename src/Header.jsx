import React from 'react'

function Header() {
  const navLinkStyle = {
    color: '#4f46e5',
    textDecoration: 'none',
    fontWeight: 600,
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1.1rem',
    padding: '8px 18px',
    borderRadius: 8,
    transition: 'background 0.2s, color 0.2s',
    margin: '0 2px',
    display: 'inline-block',
  };

  const navLinkHover = {
    background: '#e0e7ff',
    color: '#3730a3',
  };

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(90deg, #f8fafc 0%, #e0e7ff 100%)',
      borderRadius: 18,
      boxShadow: '0 2px 12px 0 rgba(60,72,100,0.10)',
      padding: '18px 48px',
      margin: '24px auto 36px',
      maxWidth: 1200,
      width: '95%',
    }}>
      <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
        <img
          height={48}
          width={48}
          src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png"
          alt="Azonmart Logo"
          style={{borderRadius: 12, background: '#fff', boxShadow: '0 1px 4px 0 rgba(60,72,100,0.08)'}}
        />
        <span style={{
          fontSize: '2.2rem',
          fontWeight: 700,
          fontFamily: 'Poppins, sans-serif',
          color: '#3730a3',
          letterSpacing: 1,
        }}>
          AZONMART
        </span>
      </div>
      <nav style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        {['Home', 'About', 'Login', 'Signup', 'Support'].map((item, idx) => (
          <a
            key={item}
            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            style={navLinkStyle}
            onMouseEnter={e => {
              Object.assign(e.currentTarget.style, navLinkHover);
            }}
            onMouseLeave={e => {
              Object.keys(navLinkHover).forEach(k => {
                e.currentTarget.style[k] = navLinkStyle[k];
              });
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header