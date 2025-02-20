import React, { useState,useEffect } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import $ from 'jquery'

const Profile = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);
  useEffect(() => {
    if (darkMode) {
      $(".card").addClass("card_darkMode")
      $(".card_darkMode").removeClass("card")
      $(".darkgithub").removeAttr("hidden", "hidden")
      $(".darkmedium").removeAttr("hidden", "hidden")
      $(".githublogo").attr("hidden", "")
      $(".mediumlogo").attr("hidden", "")

    } else {
      $(".card_darkMode").addClass("card")
      $(".card").removeClass("card_darkMode")
      $(".darkgithub").attr("hidden", "hidden")
      $(".darkmedium").attr("hidden", "hidden")
      $(".githublogo").removeAttr("hidden", "")
      $(".mediumlogo").removeAttr("hidden", "")
    }
  }, [darkMode])

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);


  }, []);

  return (
    <div className={`card overflow-hidden ${darkMode ? 'card_darkMode' : ''}`}>
      <IoIosArrowDown className={darkMode ? 'card_arrow text-white block sm:hidden' : 'card_arrow block sm:hidden'} onClick={() => setIsVisible(!isVisible)} />
      <div className='card_profile'>
        <img src='profile.jpg' alt='profile' width='150' height='150' />
      </div>
      <div className='card_details'>
        <h2 className={`${darkMode?"text-white":"text-black"}`}>Ravishankar K S</h2>
        <div className={`${darkMode ? 'profession_Dark' : 'profession'} rounded-lg my-2`}>
          <p>MERN + Cyber Security</p>
        </div>
      </div>
      
      <div className='social flex justify-center'>
        <a href='https://instagram.com/cyber_r4vi/' target='_blank' rel='noopener noreferrer'><img src='Frame 29.png' alt='Instagram' className='mx-1 cursor-pointer' /></a>
        <a href='https://www.linkedin.com/in/i4m-r4vi' target='_blank' rel='noopener noreferrer'><img src='Frame 31.png' alt='LinkedIn' className='mx-1 cursor-pointer' /></a>
        <a href='https://github.com/i4m-r4vi' target='_blank' rel='noopener noreferrer' className={`githublogo ${darkMode ? 'hidden' : ''}`}><img src='Frame 32.png' alt='GitHub' className='mx-1 cursor-pointer' /></a>
        <a href='https://medium.com/@cyber_r4vi' target='_blank' rel='noopener noreferrer' className={`mediumlogo ${darkMode ? 'hidden' : ''}`}><img src='Frame 34.png' alt='Medium' className='mx-1 cursor-pointer' /></a>
        <a href='https://github.com/i4m-r4vi' target='_blank' rel='noopener noreferrer' className={`darkgithub ${darkMode ? '' : 'hidden'}`}><img src='Darkgithub.png' alt='Dark GitHub' className='mx-1 cursor-pointer' /></a>
        <a href='https://medium.com/@cyber_r4vi' target='_blank' rel='noopener noreferrer' className={`darkmedium ${darkMode ? '' : 'hidden'}`}><img src='Darkmedium.png' alt='Dark Medium' className='mx-1 cursor-pointer' /></a>
      </div>

      <div className={`${darkMode ? 'contact_details_dark' : 'contact_details'} rounded-lg transition-all duration-300 ${isVisible ? 'max-h-96 opacity-100 mt-2 p-2' : 'max-h-0 opacity-0 mt-2 p-2'}`}>
        <div className='flex items-center justify-left'><img src='phone.png' alt='Phone' /><p className='mx-3'>+91 8344563311</p></div>
        <div className='flex items-center justify-left my-3'><img src='mail.png' alt='Mail' /><p className='mx-3'>ksravishankar4@gmail.com</p></div>
        <div className='flex items-center justify-left my-3'><img src='location.png' alt='Location' /><p className='mx-3'>Salem, Tamilnadu, India</p></div>
        <div className='flex items-center justify-left'><img src='dob.png' alt='DOB' /><p className='mx-3'>23-04-2005</p></div>
      </div>
      
      <div className='resume m-2 rounded-lg cursor-pointer shadow-lg'>
        <a href='https://drive.google.com/file/d/1F1TUX_rMTNQNIX8yFlWpe2a4toY1ZMnE/view?usp=drive_link' target='_blank' rel='noopener noreferrer'>View Resume</a>
      </div>
    </div>
  );
};

export default Profile;