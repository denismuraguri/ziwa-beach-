import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { signin } from '../actions/userActions';
import LoadingBox from '../component/LoadingBox';
import MessageBox from '../component/MessageBox';

export default function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const redirect = props.location.search?
    props.location.search.split('=')[1]
    :'/';

    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch()
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    useEffect(() => {
        if(userInfo) {
            props.history.push(redirect)
        }
    }, [props.history, userInfo, redirect]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>
                        Signin
                    </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email"> Email address</label>
                    <input type="email" id="email" placeholder="Enter email address" required onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div>
                    <label htmlFor="password"> password</label>
                    <input type="password" id="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>
                </div>
                <div>
                    <label />
                    <div>New customer? {" "} <Link to="/register"> Create your account</Link></div>
                </div>

            </form>
        </div>
    )
}
