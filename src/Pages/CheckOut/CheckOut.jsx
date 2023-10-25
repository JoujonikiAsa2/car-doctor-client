import { useLoaderData } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png"
const CheckOut = () => {
    const service = useLoaderData()
    console.log(service)

    const handleCheckOut = (e)=>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const lastName = form.lastName.value
        const phone = form.phone.value 
        const email = form.email.value
        const description = form.description.value 

        console.log(name,lastName,phone,email,description)

    }
    return (
        <div>
            <div>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={checkOut} className="w-full " />
                    <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12  rounded-l-lg">
                        <div className=' text-white space-y-7 pl-12 w-1/'>
                            <h1 className='text-4xl font-bold'>Check Out</h1>
                        </div>
                    </div>
                </div>
                <div className=" absolute w-56 h-0 left-[580px] -translate-y-full flex justify-center items-center border-b-[50px] border-l-[10px] border-r-[10px] border-l-transparent border-r-transparent border-[#FF3811]">
                </div>
                <div className=" absolute w-56 h-12 left-[580px] -translate-y-full flex justify-center items-center text-white">
                    <p>Home/Checkout</p>
                </div>
            </div>
            <div className="bg-[#F3F3F3] my-20 rounded-lg">
                <form className="py-20 " onSubmit={handleCheckOut}>
                    <div className="w-[1000px] mx-auto space-y-4">
                        <div className=" flex justify-center items-center w-full gap-4 ">
                            <input type="text" name="name" placeholder="Name" className="w-1/2 input input-bordered" />
                            <input type="text" name="lastName" placeholder="Last Name" className="w-1/2 input input-bordered" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4">
                            <input type="text" name="phone" placeholder="Your Phone" className="w-1/2 input input-bordered" />
                            <input type="text" name="email" placeholder="Your Email" className="w-1/2 input input-bordered" />
                        </div>
                        <div className="w-full flex justify-center items-center gap-4 ">
                            <textarea name="description" id="" cols="30" rows="10" placeholder="&nbsp;&nbsp; Product Description" className="w-full  border-2 rounded-lg"></textarea>
                        </div>
                        <div>
                            <input type="submit" value="Order Confirm" className="w-full input input-bordered bg-[#FF3811] text-white"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;