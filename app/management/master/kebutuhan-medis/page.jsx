import { cookies } from 'next/headers';

import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import KebutuhanMedisSection from '@/components/Sections/Masters/KebutuhanMedis';

async function Page() {
  const token = cookies().get('token').value;

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/kebutuhan-medis/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <KebutuhanMedisSection token={token} />
    </DashboardContainer>
  );
}

export default Page;
