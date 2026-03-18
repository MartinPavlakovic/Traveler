import { motion } from 'motion/react';
import Background from '../components/Background';
import { buttonAnim } from '../utils/animation';
import { Link } from 'react-router-dom';

const MotionLink = motion.create(Link);

export default function Login() {
  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <Background />
      <motion.form
        className="w-full max-w-md px-6 py-10 bg-white rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5 } }}>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-500">Log in to your account</p>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 border border-gray-300 hover:border-aqua focus:border-aqua focus:outline-none rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 hover:border-aqua focus:border-aqua focus:outline-none rounded-lg mb-4"
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
