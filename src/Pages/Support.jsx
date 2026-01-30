import React from 'react'

function Support() {
	return (
		<div style={{
			minHeight: '100vh',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
			padding: '40px 0',
		}}>
			<div style={{
				background: '#fff',
				borderRadius: 18,
				boxShadow: '0 4px 24px 0 rgba(60,72,100,0.10)',
				padding: '48px 40px',
				minWidth: 380,
				maxWidth: 600,
				textAlign: 'center',
			}}>
				<h1 style={{
					fontFamily: 'Poppins, sans-serif',
					fontWeight: 700,
					fontSize: '2.2rem',
					color: '#3730a3',
					marginBottom: 18,
				}}>
					Support
				</h1>
				<p style={{
					fontFamily: 'Poppins, sans-serif',
					fontWeight: 400,
					fontSize: '1.1rem',
					color: '#374151',
					marginBottom: 12,
				}}>
					Need help? Our support team is here for you 24/7. Reach out to us with any questions, issues, or feedback and we’ll get back to you as soon as possible.
				</p>
				<p style={{
					fontFamily: 'Poppins, sans-serif',
					fontWeight: 400,
					fontSize: '1.1rem',
					color: '#64748b',
				}}>
					Email: <a href="mailto:support@azonmart.com" style={{color:'#4f46e5',textDecoration:'none',fontWeight:600}}>support@azonmart.com</a>
				</p>
			</div>
		</div>
	)
}

export default Support
