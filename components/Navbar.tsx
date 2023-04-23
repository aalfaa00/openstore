import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";
import React, { useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi"
import { AiOutlineBars } from "react-icons/ai"
import styles from "../styles/Navbar.module.css"
import NavbarBottom from "./NavbatBottom";
import Link from "next/link";
import LoginModal from "./LoginModal";
import { Button, Modal, Form } from 'react-bootstrap';
import PhoneNumber from "@/pages/PhoneNumber";
import { GrClose } from "react-icons/gr";



const Navbar = () => {

  // OffCanVas
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function handleLogin() {
    // Handle login logic here
  }


  // Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div className="w-full bg-white text-white">
      <div className="w-full h-full border-b-[1px] border-b-inherit hidden lg:flex">
        <div className="container mx-auto h-20 px-4 flex items-center justify-betweeen gap-2">

          <Link href="/">
            <div className="navBarHover hover:bg-amber-400 logo">
              Openstore.uz
            </div>
          </Link>


          <div>
            <div className="navBarHover hover:bg-amber-400">
              <div className="w-4 grid grid-cols-2 gap-[2px]">
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
                <span className="w-1.5 h-1.5 rounded-md border-[1px] border-black inline-flex"></span>
              </div>
              <p className="text-base font-semibold">Services</p>
            </div>
          </div>

          <div className="h-10 flex flex-1 relative border border-2 rounded-full">
            <input className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent border-inherit duration-200" placeholder="Search..." type="text" />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-amber-400 text-black text-xl hover:text-white duration-300"><IoSearchOutline /></span>
          </div>


          <div className="navBarHover hover:bg-amber-400">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>


          <Link href="/PhoneNumber">
            <div className="navBarHover hover:bg-amber-400">
              <AiOutlineUser className="text-lg" />
              <span>
                <p className="text-xs">Sign In</p>
                <h2 className="text-base font-semibold -mt-1">Account</h2>
              </span>
            </div>
          </Link>




          {/* <Modal className="modal" show={show} onHide={handleClose}>
            <div >

            </div>
            
          </Modal> */}


          <Link href="/cart">
            <div className="hov flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-amber-400 duration-300 relative text-black">
              <HiOutlineShoppingBag className="text-2xl" />
              <p className="text-[10px] -mt-2">$0.00</p>
              <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-sm">0</span>
            </div>
          </Link>


        </div>




      </div>



      {/* MD Responsive */}
      <div className="w-full h-full">

        <div className="container-fluid">
          <div className="mx-auto h-20 flex items-center justify-betweeen lg:hidden">

            <button className="text-2xl navBarHover hover:bg-amber-400" onClick={handleMenuToggle}>
              <AiOutlineBars />
            </button>
            <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ''}`}>

              <div className="flex flex-1 items-center">
                <button className={styles.closeButton} onClick={handleMenuClose}>
                  <GrClose />
                </button>
                <button className={styles.menuButtonRegister} onClick={handleLogin}>
                  Register /
                </button>
                <Link href="/login">
                  <button className={styles.menuButtonLogin} onClick={handleLogin}>
                    Login
                  </button>
                </Link>

              </div>



              <div className={styles.menuItems}>
                <a href="#" className={styles.menuItem}>Home</a>
                <a href="#" className={styles.menuItem}>About</a>
                <a href="#" className={styles.menuItem}>Categories</a>
                <a href="#" className={styles.menuItem}>Contact</a>

                <div className={styles.menuDivider}></div>

                {/* <button className={styles.menuButton} onClick={handleLogout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </button> */}
              </div>
            </div>

            <Link className="hidden ss:hidden sm:flex" href="/">
              <div className="navBarHover hover:bg-amber-400 logo">
                Openstore.uz
              </div>
            </Link>

            <div className="h-10 flex flex-1 relative  rounded-full">

            </div>

            <div className="navBarHover hover:bg-amber-400 sm:hidden md:flex">
              <AiOutlineHeart className="text-2xl" />

            </div>


            <Link className="" href="/login">
              <div className="navBarHover hover:bg-amber-400">
                <AiOutlineUser className="text-2xl" />
              </div>
            </Link>

            <Link href="/cart">
              <div className="hov flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-amber-400 duration-300 relative text-black">
                <HiOutlineShoppingBag className="text-2xl" />
                <span className="absolute w-4 h-7 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-sm">0</span>

              </div>
            </Link>


          </div>
          <div className="mx-auto px-4 flex items-center justify-betweeen gap-2 lg:hidden mb-2">
            <div className="h-10 flex flex-1 relative border border-2 rounded-full mb-4">
              <input className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent border-inherit duration-200" placeholder="Search..." type="text" />
              <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-amber-400 text-black text-xl hover:text-white duration-300"><IoSearchOutline /></span>
            </div>
          </div>

        </div>

        
      </div>




      



      {/* Navbar Bottom */}
      <div className="hidden lg:flex">
        <NavbarBottom />
      </div>
    </div>
  );
};

export default Navbar;

