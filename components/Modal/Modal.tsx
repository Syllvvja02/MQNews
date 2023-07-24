import { Article } from "@/types/types";

const Modal = ({ title, author, publishedAt }: Article) => {
  return (
    <div className="">
      Modal {title} and {author}
    </div>
  );
};

export default Modal;
