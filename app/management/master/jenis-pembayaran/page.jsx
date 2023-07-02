import { cookies } from 'next/headers';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

import { getJenisPembayaran } from '@/services/master/jenisPembayaranService';

const fetchJenisPembayaran = async (token) => {
  try {
    return await getJenisPembayaran(token);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const jenisPembayaran = [];

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/jenis-pembayaran/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Jenis Pembayaran'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jenisPembayaran.length > 0 ? (
              jenisPembayaran.map((data, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{data.nama}</td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/master/jenis-pembayaran/${data.id}`}
                        className='btn-info'>
                        Edit
                      </LinkButton>
                      <PrimaryButton className='btn-accent'>
                        Delete
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyRow />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
