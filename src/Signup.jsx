import React, { useState } from 'react';
import cardiogram from './assets/cardiogram.png';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    abhaid: '',
    otp: '',
    fullName: '',
    dob: '',
    gender: '',
    phone: '',
    email: '',
  });
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors
    setSuccessMessage(''); // Clear previous success messages

    const apiBaseUrl = 'https://ayush-auth.vercel.app';

    if (!otpSent) {
      // Request OTP for Registration
      try {
        const response = await axios.post(`${apiBaseUrl}/request-registration-otp`, null, {
          params: { abha_id: formData.abhaid }
        });
        if (response.status === 200) {
          setOtpSent(true);
          setSuccessMessage('OTP sent successfully to your registered mobile number!');
        }
      } catch (err) {
        setError(err.response?.data?.detail || 'Failed to send OTP. Please check the ABHA ID and try again.');
        console.error('OTP Request Error:', err);
      }
    } else {
      // Verify OTP and complete registration
      try {
        const response = await axios.post(`${apiBaseUrl}/register-verify-otp`, {
          abha_id: formData.abhaid,
          otp: formData.otp,
          full_name: formData.fullName,
          dob: formData.dob,
          gender: formData.gender,
          phone: formData.phone,
          email: formData.email,
        });
        if (response.data.access_token) {
          localStorage.setItem('authToken', response.data.access_token);
          localStorage.setItem('abhaId', formData.abhaid);
          setSuccessMessage('Registration successful! Redirecting to home page...');
          setTimeout(() => {
            navigate('/'); // Redirect to home page on successful registration
          }, 1500);
        }
      } catch (err) {
        setError(err.response?.data?.detail || 'Invalid OTP or registration failed. Please try again.');
        console.error('OTP Verification Error:', err);
      }
    }
  };

  return (
    <>
      <nav>
        <div className="fixed top-0 left-0 w-full flex items-center border-b-2 border-b-gray-200 shadow-sm bg-white z-50 px-4 sm:px-8 md:px-16 py-2">
          <Link to="/">
            <div className="logo flex flex-row gap-3 justify-center items-center">
              <img className="h-10 w-fit" src={cardiogram} title="medical icons" alt="" />
              <h1 className="font-bold text-xl font-spline">AyushSync</h1>
            </div>
          </Link>
        </div>
      </nav>
      <div className="bg-slate-100 min-h-screen flex flex-col items-center justify-center font-sans pt-24 sm:pt-28 lg:pt-32 px-4">
        <div className="w-full max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">Register with ABHA ID</h1>
          <p className="text-gray-500 mb-8 text-center">Create your account to access health records</p>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-6">
                {!otpSent && (
                  <>
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </>
                )}
                <div>
                  <label htmlFor="abhaid" className="block text-sm font-medium text-gray-700 mb-1">
                    ABHA ID
                  </label>
                  <input
                    type="text"
                    id="abhaid"
                    name="abhaid"
                    value={formData.abhaid}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Enter your ABHA ID"
                    required
                    disabled={otpSent}
                  />
                </div>

                {otpSent && (
                  <div>
                    <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      value={formData.otp}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition duration-200"
                      placeholder="Enter 6-digit OTP"
                      required
                    />
                  </div>
                )}
              </div>

              {successMessage && <p className="mt-4 text-center text-green-500 text-sm">{successMessage}</p>}
              {error && <p className="mt-4 text-center text-red-500 text-sm">{error}</p>}

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-bold py-3 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-transform transform hover:scale-105 shadow-md"
                >
                  {otpSent ? 'Verify & Register' : 'Send OTP'}
                </button>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account? <Link to="/login" className="text-green-600 hover:underline">Login here</Link>
            </p>
          </div>
        </div>
        <div className="w-full max-w-lg mx-auto text-center text-sm text-gray-600 mt-6">
          <p>
            By registering, you agree to our <Link to="/terms" className="text-green-600 hover:underline">Terms of Service</Link> and <Link to="/privacy_policy" className="text-green-600 hover:underline">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </>
  );
}
