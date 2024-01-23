import { formatDate } from "../utils";

const PostItem = ({ title, publishedAt, img }) => {
  const formattedDate = formatDate(publishedAt);
  const imageUrl = img && img.url ? img.url : 'banner-img.jpg';

  return (
    <div className="flex flex-col min-w-16 min-h-72 rounded-md overflow-hidden shadow-md">
      <div className="w-full flex-1 bg-yellow-100">
        <img src={imageUrl} loading="lazy" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-26 p-4">
        <p className="text-gray-500 text-base">{formattedDate}</p>
        <h1 className=" text-lg font-bold min-h-16 leading-tight line-clamp-3">{title}</h1>
      </div>
    </div>
  );
};

export default PostItem;
