import { TbClockHour8 } from "react-icons/tb";
import { MdDateRange } from "react-icons/md";

let today = new Date();
let date =
  today.getDate() + "." + (today.getMonth() + 1) + "." + today.getFullYear();

let actual_time = new Date();
let time = today.getHours() + ":" + today.getMinutes();

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="grid grid-cols-4">
        <div className="">
          <MdDateRange />
        </div>
        <div className="">{date}</div>

        <div className="">
          <TbClockHour8 />
        </div>
        <div className="">{time}</div>
      </div>
    </footer>
  );
};

export default Footer;
