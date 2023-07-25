import styles from "./Navbar.module.css";

import Flag from "react-flagkit";
import Link from "next/link";

import { TiArrowRightOutline } from "react-icons/ti";

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
          <Flag country="PL" size={15} />
          <Link href="/country/pl">
            <p>Poland</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="UA" size={15} />
          <Link href="/country/ua">
            <p>Ukraine</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="LT" size={15} />
          <Link href="/country/lt">
            <p>Lithuania</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="GB" size={15} />
          <Link href="/country/gb">
            <p>England</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="BG" size={15} />
          <Link href="/country/bg">
            <p>Bulgaria</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="BE" size={15} />
          <Link href="/country/be">
            <p>Belgium</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="CA" size={15} />
          <Link href="/country/ca">
            <p>Canada</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="EG" size={15} />
          <Link href="/country/eg">
            <p>Egypt</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="FR" size={15} />
          <Link href="/country/fr">
            <p>France</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="DE" size={15} />
          <Link href="/country/de">
            <p>Germany</p>
          </Link>
        </li>
        <li className="space-x-2">
          <Flag country="CN" size={15} />
          <Link href="/country/cn">
            <p>China</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
