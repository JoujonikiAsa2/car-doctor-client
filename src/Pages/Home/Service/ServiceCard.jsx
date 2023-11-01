import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id,title, img, price } = service
    return (
        <div className="card w-[90vw] md:w-[30vw] lg:w-[30vw] bg-base-100 shadow-xl">
            <figure className="p-8">
                <img src={img} alt="Product" className="rounded-xl w-80 h-60" />
            </figure>
            <div className="px-8 pb-8 flex flex-row justify-between items-center">
                <div>
                    <h2 className="card-title bg-">{title}</h2>
                    <p className="text-[#FF3811]">Price: {price} Tk</p>
                </div>
                <div>
                    <Link to={`/book/${_id}`}>
                        <button className="btn btn-primary">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;