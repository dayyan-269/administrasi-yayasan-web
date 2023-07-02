import { cookies } from 'next/headers';

import DashboardContainer from '@/components/Containers/DashboardContainer';
import InsertForm from '@/components/Forms/Masters/KebutuhanMedis/InsertForm';

const Page = () => {
  const token = cookies().get('token').value;
  return (
    <DashboardContainer className={'gap-y-6'}>
      <InsertForm token={token} />
    </DashboardContainer>
  );
};

export default Page;
