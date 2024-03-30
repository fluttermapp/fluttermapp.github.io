import {FreeItem } from "../components";


const FreeItemCard = ({description, url, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-0 rounded-[20px] md:mr-0 sm:mr-5 mr-0 my-2 feedback-card">
   <FreeItem title={title} description={description} url={url} image={img} />
  </div>
);


export default FreeItemCard;
