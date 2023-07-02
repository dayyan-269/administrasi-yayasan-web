import { cookies } from 'next/headers';

import DashboardContainer from '@/components/Containers/DashboardContainer';
import UpdateForm from '@/components/Forms/Masters/KebutuhanMedis/UpdateForm';

const Page = ({ params }) => {
  const token = cookies().get('token').value;
  const id = params.id;

  return (
    <DashboardContainer className={'gap-y-6'}>
      <UpdateForm token={token} id={id} />
    </DashboardContainer>
  );
};

export default Page;
