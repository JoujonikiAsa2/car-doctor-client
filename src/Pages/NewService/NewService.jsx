import service from '../../assets/images/checkout/checkout.png'
const NewService = () => {
    return (
        <div>
            <div>
                <div id="slide1" className="carousel-item relative w-full ">
                    <img src={service} className="w-full " />
                    <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                        <div className=' text-white space-y-7 pl-12 w-1/2'>
                            <h1 className='text-4xl font-bold'>Add New Service</h1>
                        </div>
                    </div>
                </div>
                <div className=" absolute w-56 h-0 left-[580px] -translate-y-full flex justify-center items-center border-b-[50px] border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-[#FF3811]">
                </div>
                <div className=" absolute w-56 h-12 left-[580px] -translate-y-full flex justify-center items-center text-white">
                    <p>Home/Service</p>
                </div>
            </div>
            <div className="bg-[#F3F3F3] my-20 rounded-lg">
                <form className="py-20 ">
                    <div className="w-[1000px] mx-auto space-y-4">
                        <div className=" flex justify-center items-center w-full gap-4 ">
                            <input type="text" name="serviceName" placeholder="Service Name" className="w-1/2 input input-bordered" />
                            <input type="text" name="servicePrice" placeholder="Service Price" className="w-1/2 input input-bordered" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4">
                            <input type="text" name="text" placeholder="Text Here" className="w-1/2 input input-bordered" />
                            <input type="text" name="serviceType" placeholder="Service Type" className="w-1/2 input input-bordered" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4 ">
                            <textarea name="message" id="" cols="30" rows="10" placeholder="&nbsp;&nbsp; Your Message" className="w-full  border-2 rounded-lg"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Submit" className="w-full input input-bordered bg-[#FF3811] text-white"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewService;