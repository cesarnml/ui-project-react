import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='contact-info'>
        <div className='email-signup'>
          <h3>Interested in starting a project?</h3>
          <h4>Let's talk:</h4>
          <input placeholder='Enter email' type='email' />
          <p>We'll never share your email with anyone else.</p>
        </div>
        <div className='contact-address'>
          <div className='locations'>
            <h4>New York</h4>
            <address>
              <p>123 Lane</p>
              <p>Suite 100 </p>
              <p>Albany, NY 12345</p>
              <p>202 555 0144</p>
            </address>
          </div>
          <div className='locations'>
            <h4>Florida</h4>
            <address>
              <p>Ocean Drive</p>
              <p>Suite 201</p>
              <p>Orlando, FL 22345</p>
              <p>502 555 0144</p>
            </address>
          </div>
          <div className='locations'>
            <h4>California</h4>
            <address>
              <p>Mountain Street</p>
              <p>Suite 105</p>
              <p>San Diego, CA 22345</p>
              <p>702 555 0144</p>
            </address>
          </div> 
        </div> 
      </div> 
      <p className='copyright'>Copyright <span role='img' alt='copyright' aria-label='copyright' aria-labelledby="author">©️</span> 2018 Smith and Jones</p>
    </footer>
  )
}

export default Footer
