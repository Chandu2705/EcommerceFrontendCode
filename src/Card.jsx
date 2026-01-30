import React from 'react'

function Card(props) {
   const cardStyle = {
      background: '#fff',
      borderRadius: 16,
      boxShadow: '0 4px 18px 0 rgba(60,72,100,0.10)',
      border: '1px solid #e2e8f0',
      width: 320,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      margin: '18px auto',
      position: 'relative',
   };

   const cardHover = {
      transform: 'translateY(-8px) scale(1.03)',
      boxShadow: '0 8px 32px 0 rgba(60,72,100,0.18)',
   };

   return (
      <div
         style={cardStyle}
         onMouseEnter={e => {
            Object.assign(e.currentTarget.style, cardHover);
         }}
         onMouseLeave={e => {
            Object.keys(cardHover).forEach(k => {
               e.currentTarget.style[k] = cardStyle[k];
            });
         }}
      >
         <h2 style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: '1.4rem',
            color: '#3730a3',
            marginBottom: 16,
         }}>
            User Details
         </h2>
         <img
            height={110}
            width={110}
            src={props.image}
            alt={props.name}
            style={{
               borderRadius: 12,
               background: '#f1f5f9',
               marginBottom: 18,
               objectFit: 'cover',
               boxShadow: '0 2px 8px 0 rgba(60,72,100,0.06)',
            }}
         />
         <div style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: '1.1rem',
            color: '#374151',
            marginBottom: 8,
         }}>
            Name: {props.name}
         </div>
         <div style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            color: '#64748b',
            marginBottom: 6,
         }}>
            Age: {props.age}
         </div>
         <div style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: '1rem',
            color: '#64748b',
         }}>
            Branch: {props.branch}
         </div>
      </div>
   )
}

export default Card