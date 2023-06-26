import { cookies } from 'next/headers';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';

import { getKebutuhanMedis } from '@/services/master/kebutuhanMedisService';

const fetchKebutuhanMedis = async (token) => {
  try {
    return await getKebutuhanMedis(token);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const kebutuhanMedis = await fetchKebutuhanMedis(token);

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/kebutuhan-medis/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Kebutuhan Medis'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {kebutuhanMedis.map((data, index) => {
              return (
                <tr key={data.id}>
                  <th>{index + 1}</th>
                  <td>{data.nama}</td>
                  <td className='flex flex-row gap-1'>
                    <LinkButton
                      href={`/management/master/barang-anak-asuhan/edit/${data.id}`}
                      className='btn-info'>
                      Edit
                    </LinkButton>
                    <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
