import { cookies } from 'next/headers';

import DashboardContainer from '@/components/Containers/DashboardContainer';
import BarangAnakAsuhan from '@/components/Sections/Masters/BarangAnakAsuhan';

function Page() {
  const token = cookies().get('token').value;

  return (
    <DashboardContainer>
      <BarangAnakAsuhan token={token} />
    </DashboardContainer>
  );
}

export default Page;
