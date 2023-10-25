import { useLoaderData } from "react-router-dom";
import checkOut from "../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const BookService = () => {
    const service = useLoaderData()
    const { title, _id, price,img } = service
    console.log(service)

    const { user } = useContext(AuthContext)

    const handleBookService = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const date = form.date.value
        const email = form.email.value
        const dueAmount = form.dueAmount.value

        console.log(name, date, dueAmount, email)

        const order = {
            customerName:name, 
            email,
            img,
            date, 
            service: title,
            service_id: _id,
            price: price
        }
        console.log(name, date, dueAmount, email,order)

        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                alert("Service book successfully")
            }
        })
        

    }
    return (
        <div>
            <div>
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={checkOut} className="w-full " />
                    <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12  rounded-l-lg">
                        <div className=' text-white space-y-7 pl-12 w-1/'>
                            <h1 className='text-4xl font-bold'>Book Service: {title}</h1>
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
                <form className="py-20 " onSubmit={handleBookService}>
                    <div className="w-[1000px] mx-auto space-y-4">
                        <div className=" flex justify-center items-center w-full gap-4 ">
                            <input type="text" name="name" defaultValue={user?.displayName} className="w-1/2 input input-bordered" />
                            <input type="date" name="date" className="w-1/2 input input-bordered" />

                        </div>
                        <div className="w-full flex justify-center items-center gap-4">
                            <input type="text" name="email" defaultValue={user?.email} className="w-1/2 input input-bordered" />
                            <input type="text" name="dueAmount" defaultValue={"$" + price} className="w-1/2 input input-bordered" />

                        </div>
                        <div>
                            <input type="submit" value="Order Confirm" className="w-full input input-bordered bg-[#FF3811] text-white" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService; 