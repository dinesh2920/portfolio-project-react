import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <span>
          <motion.div
            
            initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
            className="buttons"
          >
            
            {/* <Link> */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#Contact"
            >
              Contact Me
            </motion.a>
            {/* </Link> */}
          </motion.div>
          </span>
        <div className="social">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="https://www.linkedin.com/in/dinesh-jegatheesan-783651200/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            href="https://github.com/dinesh2920"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="" />
          </motion.a>
          {/* <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" /> */}
          {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
