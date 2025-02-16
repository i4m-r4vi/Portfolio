import React from 'react'

const About = () => {
  return (
    <div className='hidden sm:block'>
      <div className='about_card'>
        <div>
          <h2 className='font-bold'>About</h2>
        </div>
        <div>
          <p>
            I have a strong background in full-stack development and cybersecurity. My journey began with web development, where I built scalable applications using MongoDB, Express.js, React, and Node.js (MERN). Over time, I developed an interest in cybersecurity, focusing on secure coding practices, vulnerability assessments, and penetration testing.
          </p>
        </div>

        <div className='mt-2'>
          <h2 className='font-bold'>What I Do</h2>
          <div className='cards1 flex'>
            <div className='about_cards flex'>
                <img src="frontend.png" alt=""  />
                <p className='text-sm'>With a robust proficiency in
                React.js. I excel at transforming design concepts into dynamic, user-friendly websites</p>
            </div>
            <div className='about_cards flex'>
                <img src="backend.png" alt="" />
                <p className='text-sm'>Skilled in Node.js, Express.js I build scalable backend systems and efficient server-side solutions using databases like MongoDB for dynamic applications.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About