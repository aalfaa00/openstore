import Link from 'next/link';
import styles from "../styles/Navbar.module.css"

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        Powered by Next.js
      </footer>
    </div>
    // <div className={styles.footer}>
    //   <footer className="bg-white shadow-lg fixed bottom-0 z-50">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 fff">
    //       <div className="flex flex-wrap justify-between">
    //         <div className="w-full lg:w-1/3 mb-10 lg:mb-0">

    //           <p>
    //             © 2021 My Store, Inc. All rights reserved.
    //           </p>
    //         </div>

    //       </div>
    //     </div>
    //   </footer>
    // </div>

  );
};

export default Footer;