import React from 'react';
import {Link} from 'react-router-dom';
import useForm from './useForm';
import validateinfo from './validateinfo';

const Register = () => {
    const {handleChange, values, handleSubmit, errors} = useForm(validateinfo);
    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
            <section className="py-4 bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            <h4>Register</h4>
                        </div>
                        <div className="col-md-8 my-auto">
                            <h6 className="float-end">Home / Register</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Register</h6>
                                    <hr/>
                                    <div className="form-inputs">
                                        <label htmlFor='name' className="mb-1 form-label">Full Name</label>
                                        <input type="text" id="name" name="name"
                                         className="form-control form-input" 
                                        placeholder="Enter Full Name"
                                        value={values.name}
                                        onChange={ handleChange }/>
                                        {errors.name && <p className='invalid'>{errors.name}</p>} 
                                    </div>
                                    <div className="form-inputs">
                                        <label htmlFor='email' className="mb-1">Email</label>
                                        <input type="text" id="email" name="email" className="form-control" 
                                        placeholder="Enter Email"
                                        value={values.email}
                                        onChange={ handleChange }/>
                                         {errors.email && <p className='invalid'>{errors.email}</p>} 
                                    </div>
                                    <div className="form-inputs">
                                        <label className="mb-1">Password</label>
                                        <input type="text" id="password" name="password" className="form-control" 
                                        placeholder="Enter Password"
                                        value={values.password}
                                        onChange={ handleChange }/>
                                         {errors.password && <p className='invalid'>{errors.password}</p>} 
                                    </div>
                                    <div className="form-inputs">
                                        <label className="mb-1">Confirm Password</label>
                                        <input type="text" id="password2" name="password2" className="form-control" 
                                        placeholder="Enter Confirm Password"
                                        value={values.password2}
                                        onChange={ handleChange }/>
                                         {errors.password2 && <p className='invalid'>{errors.password2}</p>} 
                                    </div>
                                    <div className="form-group py-3">
                                        <button className='btn btn-primary' type='submit'>Signup
                                        </button>
                                    </div>
                                    <div className='form-input-login'>
                                        Already have an account? Login <Link to="/">Here</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </form>
        </div>        
    )
}

export default Register
