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
        <div className='content-top--wrapper top-wrapper01'>
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
        </div>
        <div className='content-top--wrapper top-wrapper02'>
          <div className='content-top--img top-img02' />
          <div className='content-top--card'>
            <h2 className='content--subheaders'>
              Futuristic Designs
            </h2>
            <p>
              Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem
            </p>
            <div className='content--btn'>
              View Designs
            </div>
          </div>
        </div>
      </section>
      <section className='content-middle'>
        <h2 className='content--subheaders recent-projects'>Recent Projects</h2>
        <div className='content-middle--wrapper'>
          <div className='content-middle--img middle-img01' />
          <div className='content-middle--img-title'>THE VILLAS</div>
          <p className='first-paragraph'>
            The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
          </p>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p>
        </div>
        <div className='content-middle--wrapper'>
          <div className='content-middle--img middle-img02' />
          <div className='content-middle--img-title outskirts'>OUTSKIRTS</div>
          <p className='first-paragraph'>
            The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
          </p>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p>
        </div>
        <div className='content-middle--wrapper'>
          <div className='content-middle--img middle-img03' />
          <div className='content-middle--img-title'>THE BLOCKS</div>
          <p className='first-paragraph'>
            The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.
          </p>
          <p>
            Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Home
