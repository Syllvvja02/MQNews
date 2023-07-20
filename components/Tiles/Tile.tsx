const Tile = ({ title }: any, { author }: any) => {
  console.log("Typeof title", typeof title);
  console.log("Typeof author", typeof author);
  console.log("Author", author);
  return (
    <div className="m-2 p-2 border-2 border-violet-500 rounded-md h-48">
      {title} and {author}
    </div>
  );
};

export default Tile;
