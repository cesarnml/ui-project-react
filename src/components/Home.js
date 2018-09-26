import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='jumbotron' alt='disney concert hall'>
        <h1>
          Integrity,<br />
          Excellence,<br />
          Progress.<br />
        </h1>
      </div>
      <section className='content-top'>
      {/* <div className='content-top--wrapper top-wrapper01'>
          <div className='content-top--img top-img01' />
          <div className='content-top--card'>
            <h2 className='content--subheaders'>
              Smith & Jones Architects
            </h2>
            <p>
              Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem
            </p>
            <div className='content--btn'>
              Learn More
            </div>
          </div>
        </div> */}
        <div className='content-top--wrapper top-wrapper02'>
          <div className='content-top--img top-img02' />
          <div className='content-top--card'>
            <h2 className='content--subheaders'>
              Smith & Jones Architects
            </h2>
            <p>
              Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem
            </p>
            <div className='content--btn'>
              Learn More
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
