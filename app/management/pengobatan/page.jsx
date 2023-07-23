import { cookies } from 'next/headers';
import dayjs from 'dayjs';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';
import { getPengobatan } from '@/services/management/pengobatanService';

const fetchPengobatan = async (token) => {
  try {
    const result = getPengobatan(token);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;

  const pengobatanData = await fetchPengobatan(token);
  return (
    <DashboardContainer>
      <LinkButton href='/management/pengobatan/insert' className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Pengobatan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Kebutuhan Medis</th>
              <th>Tanggal Dipesan</th>
              <th>Tanggal Diterima</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pengobatanData.length > 0 ? (
              pengobatanData.map((item, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      {item.kebutuhan_medis
                        .map((current) => current.nama)
                        .join(', ')
                        .toString()}
                    </td>
                    <td>
                      {item.tanggal_dipesan
                        ? dayjs(item.tanggal_dipesan).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td>
                      {item.tanggal_diterima
                        ? dayjs(item.tanggal_diterima).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/pengobatan/detail/${item.id}`}
                        className='btn-info'>
                        Detail
                      </LinkButton>
                      <PrimaryButton className='btn-accent'>
                        Delete
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyRow colSpan={7} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
