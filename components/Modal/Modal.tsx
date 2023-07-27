import { ArticleModalData } from "@/types/types";

const Modal = ({ title, author, publishedAt, close }: ArticleModalData) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm"
      onClick={() => close()}
    >
      <div className="w-2/5 bg-zinc-400 text-black p-4 rounded-md items-end">
        <div className="grid">
          <button className="flex justify-end" onClick={() => close()}>
            &times;
          </button>
          <div className="m-2">{title}</div>
          <div className="relative m-2">
            Źródło: {author}{" "}
            <span className="absolute bottom-1 right-1">
              {publishedAt.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
