const Booking = ({booking}) => {

    const {customerName,email,date,img,service,price} = booking
    return (
        <div>
            <tr className="">
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {customerName}
                </td>
                <td>{email}</td>
                <td>${price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </div>
    );
};

export default Booking;