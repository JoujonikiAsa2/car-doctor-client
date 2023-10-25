import banner1 from '../../../assets/images/banner/1.jpg'
import banner2 from '../../../assets/images/banner/2.jpg'
import banner3 from '../../../assets/images/banner/3.jpg'
import banner4 from '../../../assets/images/banner/4.jpg'
import banner5 from '../../../assets/images/banner/5.jpg'
import banner6 from '../../../assets/images/banner/6.jpg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
const Banner = () => {

    return (
        <div className="carousel w-full h-[600px] rounded-lg">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={banner1} className="w-full " />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal'>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide6" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal '>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide1" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal'>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide2" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal'>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide3" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide5" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img src={banner5} className="w-full" />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal'>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide4" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide6" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full" />
                <div className="w-full absolute flex items-center h-full gap-4 transform left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-12">
                    <div className=' text-white space-y-7 pl-12 w-1/2'>
                        <h1 className='max-w-[430px] text-6xl font-normal'>Affordable Price For Car Servicing</h1>
                        <p className=''>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className=''>
                            <button className='btn btn-md btn-primary mr-3 bg-transparent'>Discover More</button>
                            <button className='btn btn-md btn-secondary bg-transparent'>Latest Project</button>
                        </div>
                    </div>
                </div>
                <div className='absolute flex justify-end gap-4 transform -translate-y-1/2 left-24 right-5 bottom-0'>
                    <a href="#slide5" className="btn btn-circle bg-gray-200 opacity-30 text-xl"><AiOutlineArrowLeft></AiOutlineArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle bg-gray-200 opacity-30 text-xl "><AiOutlineArrowRight></AiOutlineArrowRight></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;