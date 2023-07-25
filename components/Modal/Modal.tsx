import { Article } from "@/types/types";

const Modal = ({ title, author, publishedAt, close }: any) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm"
      onClick={close}
    >
      <div className="w-2/5 bg-zinc-400 text-black p-4 rounded-md items-end">
        <div className="grid">
          <button className="flex justify-end" onClick={close}>
            &times;
          </button>
          <div className="m-2">{title}</div>
          <div className="m-2">Źródło: {author}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
