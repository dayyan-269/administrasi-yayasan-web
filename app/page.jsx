import UserProvider from '@/contexts/UserContext';

import LoginForm from '@/components/Forms/LoginForm';

function Page() {
  return (
    <div className='w-full h-screen flex flex-col align-middle justify-center bg-gray-200'>
      <LoginForm className='' />
    </div>
  );
}

export default Page;
