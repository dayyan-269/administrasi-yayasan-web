import { cookies } from 'next/headers';

import DashboardContainer from '@/components/Containers/DashboardContainer';
import UpdateForm from '@/components/Forms/Masters/AnakAsuh/UpdateForm';

const Page = ({ params }) => {
  const token = cookies().get('token').value;
  const id = params.id;
  return (
    <DashboardContainer>
      <UpdateForm token={token} id={id} />
    </DashboardContainer>
  );
};

export default Page;
