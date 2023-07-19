"use client";

import Link from "next/link";
import Button from "../Button/Button";

import { useStore } from "../../app/(store)/store";

const Header: React.FC = () => {
  const arrToTiles = useStore((store) => store.arrToTiles);
  const tilesToArr = useStore((store) => store.tilesToArr);
  const arr = useStore((store) => store.arr);
  console.log(arr);
  return (
    <header className="ml-6 p-4">
      <div className="grid grid-cols-8 gap-2 m-10">
        <div className="col-start-1 col-end-6 py-2">
          <Link href="/">MQNews</Link>
        </div>
        <div>
          <Button href="" variant="outline-primary" onClick={arrToTiles}>
            Tiles
          </Button>
        </div>
        <div>
          <Button href="" variant="outline-primary" onClick={tilesToArr}>
            List
          </Button>
        </div>
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
