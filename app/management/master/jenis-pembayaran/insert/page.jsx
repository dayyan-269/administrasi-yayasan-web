import { cookies } from 'next/headers';

import DashboardContainer from '@/components/Containers/DashboardContainer';
import InsertForm from '@/components/Forms/Masters/JenisKetunaan/InsertForm';

const Page = () => {
  const token = cookies().get('token').value;
  return (
    <DashboardContainer>
      <InsertForm token={token} />
    </DashboardContainer>
  );
};

export default Page;
