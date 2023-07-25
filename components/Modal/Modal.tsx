import { Article } from "@/types/types";

const Modal = ({ title, author, publishedAt, close }: any) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm">
      <div className="w-2/5 bg-zinc-400 text-black p-4 rounded-md">
        <div>{title}</div>
        <button onClick={close}>&times;</button>
        <div>{author}</div>
      </div>
    </div>
  );
};

export default Modal;
