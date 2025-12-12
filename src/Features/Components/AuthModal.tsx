import React, { useState } from 'react'
import { X, Mail, Lock, User } from 'lucide-react'
import { useAuth } from '../../Context/AuthContext'

type Props = {
    isOpen: boolean
    onClose: () => void
}


const AuthModal: React.FC<Props> = ({ isOpen, onClose }) => {
    const [mode, setMode] = useState<'login' | 'register'>('login')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loading, setLoading] = useState(false)
    const { login, register, error } = useAuth()

    const handleSubmit = async () => {
        setLoading(true)
        try {
            if (mode === 'login') {
                await login(email, password)
            } else {
                await register(username, email, password)
            }
        } catch {
            // Error is handled by context
        }
        setLoading(false)
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
            {/* Backdrop with blur */}
            <div
                className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Gradient header background */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 opacity-10" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                    aria-label="Close"
                >
                    <X size={20} />
                </button>

                {/* Header */}
                <div className="relative pt-8 pb-6 px-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                        <User className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">
                        {mode === 'login' ? 'Welcome back' : 'Create account'}
                    </h2>
                    <p className="text-gray-500 mt-1">
                        {mode === 'login' ? 'Login to continue' : 'Sign up to get started'}
                    </p>
                </div>

                {/* Body */}
                <div className="px-8 pb-8 space-y-5">
                    {/* Error message */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm animate-in slide-in-from-top duration-200">
                            {error}
                        </div>
                    )}

                    {/* Register: Username */}
                    {mode === 'register' && (
                        <div className="animate-in slide-in-from-top duration-200">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                    placeholder="johndoe"
                                />
                            </div>
                        </div>
                    )}

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* Forgot password - only on login */}
                    {mode === 'login' && (
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
                            >
                                Forgot password?
                            </button>
                        </div>
                    )}

                    {/* Submit button */}
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-red-500 to-pink-600 text-white py-3.5 rounded-xl font-bold hover:from-red-600 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                {mode === 'login' ? 'Logging in...' : 'Creating account...'}
                            </span>
                        ) : (
                            mode === 'login' ? 'Login' : 'Create account'
                        )}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">or</span>
                        </div>
                    </div>

                    {/* Toggle mode */}
                    <div className="text-center">
                        <p className="text-gray-600 text-sm">
                            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
                            {' '}
                            <button
                                type="button"
                                onClick={() => {
                                    setMode(mode === 'login' ? 'register' : 'login')
                                    setEmail('')
                                    setPassword('')
                                    setUsername('')
                                }}
                                className="text-red-600 font-bold hover:text-red-700 transition-colors"
                            >
                                {mode === 'login' ? 'Sign up' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthModal