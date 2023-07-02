import DashboardContainer from '@/components/Containers/DashboardContainer';
import UpdateForm from '@/components/Forms/Masters/BarangAnakAsuh/UpdateForm';
import { cookies } from 'next/headers';

function Page({ params }) {
  const token = cookies().get('token').value;
  const id = params.id;
  return (
    <DashboardContainer>
      <UpdateForm token={token} id={id} />
    </DashboardContainer>
  );
}

export default Page;
