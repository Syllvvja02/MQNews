import Link from "next/link";
import Button from "../Button/Button";

const Header: React.FC = () => {
  return (
    <header className="ml-20 p-4">
      <div className="grid grid-cols-8 gap-2 m-10">
        <div className="col-start-1 col-end-6 py-2">
          <Link href="/">MQNews</Link>
        </div>
        <div className="py-2">Kafelki</div>
        <div className="py-2">Lista</div>
        <div>
          <Button href="" variant="outline-primary">
            Funny stuff
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
