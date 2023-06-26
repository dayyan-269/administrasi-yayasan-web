'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import TextInput from '@/components/Inputs/TextInput';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import LoadingIndicator from '../Loading/LoadingIndicator';

import { login } from '@/services/authService';

function LoginForm({ className = '' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const loginHandler = async () => {
    try {
      setIsLoading(true);
      setError(null);

      await login({ email, password });

      router.push('/management/dashboard');
    } catch (e) {
      setIsLoading(false);
      setError(e.message);
    }
  };

  return (
    <div className='w-1/3 flex flex-col gap-y-3 mx-auto '>
      <div>
        <h1 className='prose prose-2xl text-primary font-bold tracking-widest'>
          Login
        </h1>
        <p className='prose prose-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      {error ? (
        <PrimaryAlert className={`alert-error`}>{error}</PrimaryAlert>
      ) : (
        ''
      )}

      <div className={`card shadow-xl ${className}`}>
        <div className='card-body'>
          <TextInput
            label='Email'
            value={email}
            type='email'
            isRequired={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextInput
            label='Password'
            type='password'
            value={password}
            isRequired={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <PrimaryButton className='btn-primary mt-2' onClick={loginHandler}>
            {isLoading ? <LoadingIndicator /> : 'Login'}
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
