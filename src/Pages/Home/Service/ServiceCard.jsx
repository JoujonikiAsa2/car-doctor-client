import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ service }) => {
    const { title, img, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="p-8">
                <img src={img} alt="Product" className="rounded-xl" />
            </figure>
            <div className="px-8 pb-8 flex flex-row justify-between items-center">
                <div>
                    <h2 className="card-title bg-">{title}</h2>
                    <p className="text-[#FF3811]">Price: {price}</p>
                </div>
                <div>
                    <AiOutlineArrowRight className="text-[#FF3811]"></AiOutlineArrowRight>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;