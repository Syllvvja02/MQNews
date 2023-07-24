import styles from "./Navbar.module.css";
import poland from "../../public/flags/poland.svg";
import england from "../../public/flags/united-kingdom.svg";
import france from "../../public/flags/france.svg";
import germany from "../../public/flags/germany.svg";

import { TiArrowRightOutline } from "react-icons/ti";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={`fixed w-28 my-24 ${styles.navbar}`}>
      <div className={styles.arrow}>
        <p>Countries</p>
        <span>
          <TiArrowRightOutline size={35} />
        </span>
      </div>
      <ul className="flex p-0 m-0">
        <li className="space-x-2">
          <Image src={poland} width={10} height={10} alt="Poland flag" />
          <Link href="">
            <p>Poland</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Image src={england} width={10} height={10} alt="England flag" />
          <Link href="">
            <p>England</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Image src={france} width={10} height={10} alt="France flag" />
          <Link href="">
            <p>France</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Image src={germany} width={10} height={10} alt="Germany flag" />
          <Link href="">
            <p>Germany</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
