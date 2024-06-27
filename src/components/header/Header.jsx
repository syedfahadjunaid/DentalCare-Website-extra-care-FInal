import logo from '../../assets/extracare-logo.png';
import './header.css';
import { useState } from 'react';
import Link from '../Link';
import { BsWhatsapp } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
// import Dropdown from '../Dropdown';
import Button from '../Button';
import { useEffect, useRef } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const [activeNow, setActiveNow] = useState('home');

  const activeColor = 'text-[#46b649] text-[1.2rem]';

  // console.log(dropdown);

  //Services Dropdown
  // const [servicesDropdown, setServicesDropdown] = useState(false);

  const divEl = useRef();
  const navBar = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (
        !divEl.current.contains(event.target) &&
        !navBar.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler);
  }, []);

  const dropdownData = [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'About',
      to: '/about',
    },
    {
      title: 'Services',
      to: '/services',
    },
    {
      title: 'Contact',
      to: '/contactus',
    },
    {
      title: 'Careers',
      to: '/careers',
    },
    {
      title: 'Appointment',
      to: '/appointment',
    },
    {
      title: 'Company Profile',
      to: '/companyprofile',
    },
  ];

  const renderedDropdown = dropdownData.map((service, index) => {
    return (
      <li
        onClick={() => setDropdown(false)}
        className="navbar-dropdown-links text-white"
        key={index}
      >
        <Link to={service.to}>{service.title}</Link>
      </li>
    );
  });

  // useEffect(() => {
  //   // const handleScroll = () => {
  //   //   setDropdown(false);
  //   // };
  //   document.body.addEventListener(onscroll, setDropdown(false));

  //   return () => {
  //     document.body.removeEventListener(onscroll, setDropdown(false));
  //   };
  // }, []);

  return (
    <div id="header" className="section_header" ref={navBar}>
      <div className="app_header border-b-2 border-solid border-[#136EB3]">
        <div className="app_header-logo_img">
          <Link to="/">
            <LazyLoadImage
              onClick={() => setActiveNow('home')}
              className=""
              src={logo}
              alt="app_logo_img"
            />
          </Link>
        </div>
        <div className="app_header-links">
          <div
            onClick={() => setActiveNow('home')}
            className={activeNow === 'home' ? activeColor : 'app_header-link'}
          >
            <h3>
              <Link to="/">Home</Link>
            </h3>
          </div>
          <h3>|</h3>
          <div
            onClick={() => setActiveNow('about')}
            className={activeNow === 'about' ? activeColor : 'app_header-link'}
          >
            <h3>
              <Link to="/about">About</Link>
            </h3>
          </div>
          <h3>|</h3>
          <div
            onClick={() => setActiveNow('services')}
            className={
              activeNow === 'services' ? activeColor : 'app_header-link'
            }
          >
            <h3>
              <Link to="/services">Services</Link>
            </h3>
          </div>
          <h3>|</h3>
          <div
            onClick={() => setActiveNow('contact')}
            className={
              activeNow === 'contact' ? activeColor : 'app_header-link'
            }
          >
            <h3>
              <Link to="/contactus">Contact</Link>
            </h3>
          </div>
          <h3>|</h3>
          <div
            onClick={() => setActiveNow('companyprofile')}
            className={
              activeNow === 'companyprofile' ? activeColor : 'app_header-link'
            }
          >
            <h3>
              <Link to="/companyprofile">Company Profile</Link>
            </h3>
          </div>
          <h3>|</h3>
          <div
            onClick={() => setActiveNow('career')}
            className={activeNow === 'career' ? activeColor : 'app_header-link'}
          >
            <h3>
              <Link to="/careers">Careers</Link>
            </h3>
          </div>
        </div>
        <div className="app_header-sign">
          <div className="app_header-search">
            {
              <a
                href="https://wa.me/+971585855829"
                target="_blank"
                rel="noreferrer"
              >
                <BsWhatsapp className="icon-transition text-2xl hover:text-green-500" />
              </a>
            }
          </div>
          <div className="app_header-appointment-btn">
            <Button primary>
              <Link to="/appointment">Appointment</Link>
            </Button>
          </div>
        </div>
        <div className="app_header-dropdown">
          <a
            href="https://wa.me/+971585855829"
            target="_blank"
            rel="noreferrer"
          >
            <BsWhatsapp className="icon-transition whatsapp-btn mt-1 text-2xl hover:text-green-500" />
          </a>
          <button
            onClick={() => setDropdown(!dropdown)}
            className="dropdown-btn"
          >
            <GiHamburgerMenu
              className={`icon-transition text-3xl text-black ease-in hover:animate-pulse hover:text-green-500 ${
                dropdown ? 'rotate-90 hover:rotate-90' : 'hover:animate-pulse'
              }`}
            />
          </button>
        </div>
      </div>
      {dropdown && (
        <ul
          className="navbar_dropdown dropdown_menu--animated dropdown_menu-6 overlay origin-top-left transform transition duration-150 ease-in-out"
          ref={divEl}
        >
          {renderedDropdown}
        </ul>
      )}
      {/* <div className="app_header-categories">
        <div className="app_header-category">
          <h3>
            <a href="#store">Store</a>
          </h3>
        </div>
      </div> */}
      {/* {dropdown && (
        <div className="header_dropdown overlay">
          <div className="app_header-link">
            <h3>
              <Link to="/about">About</Link>
            </h3>
          </div>

          <div className="app_header-link">
            <h3>
              <Link to="/services">Services</Link>
            </h3>
          </div>

          <div className="app_header-link">
            <h3>
              <Link to="/contact">Contact</Link>
            </h3>
          </div>

          <div className="app_header-link">
            <h3>
              <Link to="/reviews">Reviews</Link>
            </h3>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
