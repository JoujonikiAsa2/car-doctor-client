import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {

    const {login, setUser} = useContext(AuthContext)
    const navigate=useNavigate()
    const [error,setError] = useState()

    const handleSignUp =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)

        login(email,password)
        .then(res=> {
            const user = res.user
            console.log(user)
            setUser(user)
            navigate('/')
        })
        .catch(error=>{
            const errors = error.message
            console.log(errors)
            setError(errors)
        })
        // form.reset()

    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm border-2 bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>

                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error ? <p>{error}</p> :''
                        }
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn bg-[#FF3811]"/>
                        </div>
                        <div>
                            <Link to='/signUp'><p className='text-xs py-3 text-center'>New to Car Doctor? <span className='text-[#FF3811]'>Sign Up</span></p></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;