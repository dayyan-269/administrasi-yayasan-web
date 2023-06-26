import { cookies } from 'next/headers';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';

import { getJenisKetunaan } from '@/services/master/jenisKetunaanService';

const fetchJenisKetunaan = async (token) => {
  try {
    return await getJenisKetunaan(token);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const jenisKetunaanData = await fetchJenisKetunaan(token);

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/jenis-ketunaan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Jenis Ketunaan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jenisKetunaanData.map((data, index) => {
              return (
                <tr key={data.id}>
                  <th>{index + 1}</th>
                  <td>{data.nama}</td>
                  <td className='flex flex-row gap-1'>
                    <LinkButton
                      href={`/management/master/Jenis Ketunaan/edit/${data.id}`}
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
