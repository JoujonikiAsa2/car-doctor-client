import {TiDelete} from "react-icons/ti"
import { Link } from "react-router-dom";
const Booking = ({booking,handleDelete,handleBookingConfirm}) => {
    const {_id,customerName,date,img,service,price,status} = booking
    return (
        <div>
            <tr className="">
                <th>
                    <TiDelete className="text-3xl hover:cursor-pointer"  onClick={()=>handleDelete(_id) }></TiDelete>
                </th>
                <td >
                    <div className="flex justify-center items-center gap-5">
                        <div className="avaar">
                            <div className="">
                                <img src={img} alt=""  className="w-20 h-20"/>
                            </div>
                        </div>
                        <div className="w-48">
                            <div className="font-bold">{service}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>${price}</td>
                <td>{date}</td>
                <th>
                   {
                    status==="confirm" ? 
                        <span>Confirmed</span>:
                        <Link><button className="btn btn-ghost btn-xs bg-orange-400 text-white w-36" onClick={()=>handleBookingConfirm(_id)}>Please Confirm</button></Link>
                    
                   }
                </th>
            </tr>
        </div>
    );
};

export default Booking;