import React from 'react'

function About() {
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
					About Azonmart
				</h1>
				<p style={{
					fontFamily: 'Poppins, sans-serif',
					fontWeight: 400,
					fontSize: '1.1rem',
					color: '#374151',
					marginBottom: 12,
				}}>
					Azonmart is your one-stop shop for the latest and greatest products. We are dedicated to providing a seamless and enjoyable shopping experience, with a wide range of quality items and fast delivery.
				</p>
				<p style={{
					fontFamily: 'Poppins, sans-serif',
					fontWeight: 400,
					fontSize: '1.1rem',
					color: '#64748b',
				}}>
					Our mission is to make online shopping easy, affordable, and fun for everyone. Thank you for choosing Azonmart!
				</p>
			</div>
		</div>
	)
}

export default About
