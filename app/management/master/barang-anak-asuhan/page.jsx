import { cookies } from 'next/headers';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

function Page() {
  const token = cookies().get('token').value;
  const barangAnak = [];

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/barang-anak-asuhan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Barang Anak Asuhan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {barangAnak.length > 0 ? (
              barangAnak.map((data, index) => {
                <tr key={data.id}>
                  <th>{index + 1}</th>
                  <td>{data.nama}</td>
                  <td>{data.deskripsi}</td>
                  <td className='flex flex-row gap-1'>
                    <LinkButton
                      href={`/management/master/barang-anak-asuhan/edit/${data.id}`}
                      className='btn-info'>
                      Edit
                    </LinkButton>
                    <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
                  </td>
                </tr>;
              })
            ) : (
              <EmptyRow colSpan={4} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
