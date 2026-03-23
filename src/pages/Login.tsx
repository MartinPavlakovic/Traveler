import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Background from '../components/Background';
import { buttonAnim, MotionLink } from '../utils/animation';
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully!');
      navigate('/');
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential') {
        alert('Invalid email or password');
      } else {
        alert('Something went wrong');
      }
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Background />
      <motion.form
        onSubmit={handleLogin}
        className="relative z-10 w-full max-w-md px-6 py-10 bg-white rounded-xl shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">Log in to your account</p>
        </div>

        <div className="mb-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 hover:border-aqua focus:border-aqua focus:outline-none rounded-lg mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 hover:border-aqua focus:border-aqua focus:outline-none rounded-lg mb-4"
            required
          />
        </div>

        <motion.button
          {...buttonAnim}
          type="submit"
          className="w-full py-3 bg-linear-to-r from-aqua to-peach text-gray-800 font-semibold rounded-lg cursor-pointer mb-4">
          Login
        </motion.button>

        <MotionLink
          {...buttonAnim}
          to="/register"
          className="block py-2 text-gray-600 font-medium cursor-pointer text-center">
          Don't have an account? Sign up
        </MotionLink>
      </motion.form>
    </div>
  );
}
