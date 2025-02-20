import React from 'react'
import { useEffect, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import $ from 'jquery'

const Profile = ({ darkMode }) => {
  useEffect(() => {
    if (darkMode) {
      $(".card").addClass("card_darkMode")
      $(".card_darkMode").removeClass("card")
      $(".dark_name").addClass("dark_name1")
      $(".hero_name").attr("hidden", "hidden")
      $(".darkgithub").removeAttr("hidden", "hidden")
      $(".darkmedium").removeAttr("hidden", "hidden")
      $(".githublogo").attr("hidden", "")
      $(".mediumlogo").attr("hidden", "")

    } else {
      $(".card_darkMode").addClass("card")
      $(".card").removeClass("card_darkMode")
      $(".hero_name").removeAttr("hidden", "hidden")
      $(".dark_name").removeClass("dark_name1")
      $(".darkgithub").attr("hidden", "hidden")
      $(".darkmedium").attr("hidden", "hidden")
      $(".githublogo").removeAttr("hidden", "")
      $(".mediumlogo").removeAttr("hidden", "")
    }
  }, [darkMode])
  const [isVisible, setIsVisible] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);


  }, []);



  return (
    <div className='card overflow-hidden'>
      <IoIosArrowDown className={darkMode ? "card_arrow text-white block sm:hidden" : "card_arrow block sm:hidden"} onClick={() => setIsVisible(!isVisible)} />
      <div className='card_profile'>
        <img src="profile.jpg" alt="profile" width={"150px"} height={"150px"} />
      </div>
      <div className='card_details'>
        <h2 className='hero_name'>Ravishankar K S</h2>
        <h2 className='dark_name'>Ravishankar K S</h2>
        <div className='profession rounded-lg'>
          <p>MERN + Cyber Security</p>
        </div>
      </div>
      {/* social_media */}
      <div className='social flex justify-center'>
        <a href="https://instagram.com/cyber_r4vi/" target='_blank'><img src="Frame 29.png" alt="" className='mx-1 cursor-pointer' /></a>
        <a href="https://www.linkedin.com/in/i4m-r4vi" target='_blank'><img src="Frame 31.png" alt="" className='mx-1 cursor-pointer' target='_blank' /></a>
        <a href="https://github.com/i4m-r4vi" target='_blank' className='githublogo'><img src="Frame 32.png" alt="" className='mx-1 cursor-pointer' target='_blank' /></a>
        <a href="https://medium.com/@cyber_r4vi" target='_blank' className='mediumlogo'><img src="Frame 34.png" alt="" className='mx-1 cursor-pointer' target='_blank' /></a>
        <a href="https://github.com/i4m-r4vi" target='_blank' className='darkgithub' ><img src="Darkgithub.png" alt="" className='mx-1 cursor-pointer' target='_blank' /></a>
        <a href="https://medium.com/@cyber_r4vi" target='_blank' className='darkmedium'><img src="Darkmedium.png" alt="" className='mx-1 cursor-pointer' target='_blank' /></a>
      </div>

      {/* contact_Details */}

      <div className={`contact_details rounded-lg  transition-all duration-300 ${isVisible ? " max-h-96 opacity-100 mt-2 p-2" : "contact_details max-h-0 opacity-0 mt-2 p-2"}`}>
        <div className='flex items-center justify-left'>
          <img src="phone.png" alt="phone.png" />
          <p className='mx-3'>
            +91 8344563311
          </p>
        </div>

        <div className='flex items-center justify-left my-3'>
          <img src="mail.png" alt="mail.png" />
          <p className='mx-3'>
            ksravishankar4@gmail.com
          </p>
        </div>
        <div className='flex items-center justify-left my-3'>
          <img src="location.png" alt="location.png" />
          <p className='mx-3'>
            Salem,Tamilnadu,India
          </p>
        </div>
        <div className='flex items-center justify-left'>
          <img src="dob.png" alt="dob.png" />
          <p className='mx-3'>
            23-04-2005
          </p>
        </div>
      </div>
      <div className='resume m-2 rounded-lg cursor-pointer shadow-lg'>
        <a href='https://drive.google.com/file/d/1F1TUX_rMTNQNIX8yFlWpe2a4toY1ZMnE/view?usp=drive_link' target='_blank'>View Resume</a>
      </div>
    </div>



  )
}

export default Profile