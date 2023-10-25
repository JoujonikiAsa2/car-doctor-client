import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-[400px] py-20">
            <div className="hero-content flex-col gap-28 lg:gap-10 lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src={person} alt="" className='w-3/4 rounded-lg shadow-2xl'/>
                    <img src={parts} alt="" className='w-1/2 rounded-lg shadow-2xl absolute border-8 border-white top-1/2 right-5'/>
                </div>
                <div className="lg:w-1/2 space-y-4">
                    <h3 className='text-lg font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className='text-4xl lg:w-[290px]'>We are qualified & of experience in this field</h1>
                    <p className="py-6 lg:w-[459px] capitalize">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='lg:w-[459px] capitalize'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-error bg-[#FF3811] hover:bg-transp5rent capitalize">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;