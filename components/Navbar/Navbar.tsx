import styles from "./Navbar.module.css";
import poland from "../../public/flags/poland.svg";
import england from "../../public/flags/united-kingdom.svg";
import france from "../../public/flags/france.svg";
import germany from "../../public/flags/germany.svg";

import { TiArrowRightOutline } from "react-icons/ti";

import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={`fixed w-24 my-16 ${styles.navbar}`}>
      <div className={styles.arrow}>
        <p>Countries</p>
        <span>
          <TiArrowRightOutline size={35} />
        </span>
      </div>
      <ul className="flex p-0 m-0">
        <li className="space-x-2">
          <Image src={poland} width={10} height={10} alt="Poland flag" />
          <p>Poland</p>
        </li>
        <li className="space-x-2">
          <Image src={england} width={10} height={10} alt="England flag" />
          <p>England</p>
        </li>
        <li className="space-x-2">
          <Image src={france} width={10} height={10} alt="France flag" />
          <p>France</p>
        </li>
        <li className="space-x-2">
          <Image src={germany} width={10} height={10} alt="Germany flag" />
          <p>Germany</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
