import { useEffect, useState } from "react";
import ServiceCard from "../Service/ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div>
            <div className="text-center mb-10">
                <h3 className='text-lg font-bold text-[#FF3811]'>Service</h3>
                <h1 className='text-4xl'>Our Service Area</h1>
                <p className="py-6 capitalize">the majority have suffered alteration in some form, by injected humour, or randomised <br />words which do not look even slightly believable.  </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 pb-20 gap-8">
                {
                    services.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="flex justify-center items-center pb-20">
                <button className="btn btn-error bg-transparent">More Products</button>
            </div>
        </div>
    );
};

export default Services;