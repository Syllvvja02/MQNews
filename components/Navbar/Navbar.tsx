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
          <Flag country="GB" size={15} />
          <Link href="/country/uk">
            <p>England</p>
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
      </ul>
    </nav>
  );
};

export default Navbar;
