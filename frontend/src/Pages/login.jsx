import React, { useState, useContext } from 'react'// backend
import './login.css'; 
import axios from "axios"; // backend
import logo from '../assets/bokd-high-resolution-logo-transparent.png';
import { AuthContext } from "../context/AuthContext"; // backend
import { useNavigate, Link } from 'react-router-dom'; // backend

export default function Login() {
     const [activeTab, setActiveTab] = useState('login');
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [signupData, setSignupData] = useState({ 
        username: '', 
        email: '', 
        phone: '',
        password: '', 
        confirmPassword: '' 
    });
    const [message, setMessage] = useState({ text: '', isError: false });
    const [isLoading, setIsLoading] = useState(false);

    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();

    const switchToTab = (tab) => {
        setActiveTab(tab);
        setMessage({ text: '', isError: false });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!loginData.username || !loginData.password) {
            return setMessage({ text: 'Please fill all fields', isError: true });
        }

        setIsLoading(true);
        try {
            const response = await axios.post(
                'http://localhost:5000/api/users/login', 
                loginData
            );
            
             // Store user data including role
            const userData = {
                ...response.data.user,
                isAdmin: response.data.user.role === 'admin' // Check if user is admin
            };
            
            // Store in localStorage
            localStorage.setItem('user', JSON.stringify(userData));
            
            // Update context
            login(userData);
            
            setMessage({ text: 'Login successful!', isError: false });
            navigate('/');
            
            
        } catch (error) {
            setMessage({ 
                text: 'Login failed: ' + (error.response?.data?.message || 'Server error'), 
                isError: true 
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        if (!signupData.username || !signupData.email || !signupData.phone ||
            !signupData.password || !signupData.confirmPassword) {
            return setMessage({ text: 'Please fill all fields', isError: true });
        }

        if (signupData.password !== signupData.confirmPassword) {
            return setMessage({ text: 'Passwords do not match', isError: true });
        }

        setIsLoading(true);
        try {
            await axios.post('http://localhost:5000/api/users', signupData);
            
            setMessage({ 
                text: 'Signup successful! Please login.', 
                isError: false 
            });
            setSignupData({ 
                username: '', 
                email: '',
                phone: '', 
                password: '', 
                confirmPassword: '' 
            });
            switchToTab('login');
            
        } catch (error) {
            setMessage({ 
                text: 'Signup failed: ' + (error.response?.data?.message || 'Server error'), 
                isError: true 
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
    <div className="login-background">
        <div className="login-container">
            <Link to="/"><img className="lsp-logo" src={logo} alt="" /></Link>
            <div className="ltab-switcher">
                <button
                    id="ls-active"
                    className={`ls-tab-button ${activeTab === 'login' ? 'ls-active' : ''}`}
                    onClick={() => switchToTab('login')}>
                    Login
                </button>
                <button
                    id="ls-active"
                    className={`ls-tab-button ${activeTab === 'signup' ? 'ls-active' : ''}`}
                    onClick={() => switchToTab('signup')}>
                    Sign Up
                </button>
            </div>
            <div className="tab-content" style={{ textAlign: 'center' }}>
                {message.text && ( // backend from here
                        <p style={{ color: message.isError ? 'red' : 'green' }}>
                            {message.text}
                        </p>
                    )} 
                {activeTab === 'login' ? (
                    <form className="login-form" onSubmit={handleLogin}>
                        <h2>Login</h2>
                        <input className="form-inp" type="text" placeholder="Username" 
                         value={loginData.username}  // backend
                                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} // backend
                                required
                        />
                        <input className="form-inp" type="password" placeholder="Password" 
                         value={loginData.password}  // backend
                                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} // backend
                                required
                        />
                        <button className="form-btn" type="submit">Login</button>
                        <Link to="/login/forgot-password"><h4>Forgot your password?</h4></Link>
                    </form>
                ):(
               
                   <form className="signup-form" onSubmit={handleSignUp}>
                        <h2>Sign Up</h2>
                        <input className="form-inp" type="text" placeholder="Username" 
                                value={signupData.username} 
                                onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                                required
                        />
                        <input className="form-inp" type="email" placeholder="Email" 
                                value={signupData.email} 
                                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                required
                        />
                        <input 
                            className="form-inp" 
                            type="tel" 
                            placeholder="Phone Number" 
                            value={signupData.phone} 
                            onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                            required
                        />
                        <input className="form-inp" type="password" placeholder="Password" 
                                value={signupData.password} 
                                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                required
                        />
                        <input className="form-inp" type="password" placeholder="Confirm Password" 
                                value={signupData.confirmPassword} 
                                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                                required
                        />
                        <button className="form-btn" type="submit" disabled={isLoading} >{isLoading ? 'Signing up...' : 'Sign Up'}</button>
                    </form>
                )}
            </div>
        </div>
    </div>
    );
}
