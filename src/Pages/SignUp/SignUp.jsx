import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { user,createUser } = useContext(AuthContext)
    const [error,setError] = useState()
    const navigate=useNavigate()
    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name=e.target.name.value
        const email=e.target.email.value
        const password=e.target.password.value
        console.log(email,password,password)
        console.log(user)

        createUser(email,password)
        .then(res=>{
            console.log(res.user)
            updateProfile(res.user,{
                displayName: name,
            })
            navigate('/login')
        })
        .catch(error=>{
            console.log(error.message)
            setError(error.message)
            
        })
        form.reset()
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>

                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {
                            error ? <p className='text-xs py-3 text-center text-[#FF3811]'>{error}</p>: ""
                        }
                        <div className="form-control mt-6">
                            <input type="submit" value="Sign Up" className="btn bg-[#FF3811]" />
                        </div>
                        <div>
                            <Link to='/login'><p className='text-xs py-3 text-center'>Have an account?  <span className='text-[#FF3811]'>Login</span></p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;