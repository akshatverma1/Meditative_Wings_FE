import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function PasswordProtected() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const correctPassword = 'shadow123'; // Change this password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Access Denied: Invalid Credentials');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/newtweetpost" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl">
        <div className="flex justify-center mb-8">
          <div className="h-16 w-16 bg-teal-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl text-center font-bold mb-6 text-gray-100">Secure Access Portal</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Enter Passcode
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-700 text-gray-100 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 border border-gray-600 outline-none transition duration-200"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Authenticate
          </button>

          {errorMessage && (
            <div className="mt-4 p-3 bg-red-500/20 text-red-300 rounded-lg flex items-center space-x-2 animate-pulse">
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}
        </form>

        <div className="mt-8 text-center text-sm text-gray-400">
          <p>Ensure your credentials are protected at all times</p>
        </div>
      </div>
    </div>
  );
}

export default PasswordProtected;