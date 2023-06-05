'use client';

import { useRouter } from 'next/navigation';

import TextInput from '../Inputs/TextInput';
import PrimaryButton from '../Buttons/PrimaryButton';

function LoginForm({ className = '' }) {
  const router = useRouter();

  return (
    <div className={`card shadow-xl ${className}`}>
      <div className='card-body'>
        <TextInput label='Username' />
        <TextInput label='Password' type='password' />
        <PrimaryButton onClick={() => router.push('/management')}>
          Login
        </PrimaryButton>
      </div>
    </div>
  );
}

export default LoginForm;
