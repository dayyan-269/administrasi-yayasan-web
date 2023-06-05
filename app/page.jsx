import LoginForm from '@/components/Forms/LoginForm';

function Page() {
  return (
    <div className='w-full h-screen flex flex-col align-middle justify-center bg-gray-200'>
      <div className='w-1/3 mx-auto '>
        <h1 className='prose prose-2xl text-primary font-bold tracking-widest'>
          Login
        </h1>
        <p className='prose prose-sm'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>
      <LoginForm className='mx-auto w-1/3' />
    </div>
  );
}

export default Page;
