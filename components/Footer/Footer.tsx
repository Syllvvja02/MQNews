import { TbClockHour8 } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";

import styles from "./Footer.module.css";

let today = new Date();
let date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

let time = today.getHours() + ":" + today.getMinutes();

const Footer: React.FC = () => {
  return (
    <footer className="ml-6 p-4">
      <div className="grid grid-cols-6 gap-2 mx-10">
        <div className="col-start-1 col-end-5">
          Liczba artykułów na stronie:
        </div>

        <div className={styles.icons}>
          <MdDateRange /> {date}
        </div>

        <div className={styles.icons}>
          <TbClockHour8 /> {time}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
