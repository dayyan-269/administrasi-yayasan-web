import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';
import { getPegawai } from '@/services/master/pegawaiService';
import { cookies } from 'next/headers';
import dayjs from 'dayjs';

const fetchPegawai = async (token) => {
  try {
    return await getPegawai(token);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const pegawaiData = await fetchPegawai(token);

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/pegawai/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>

      <Card title={'Data Pegawai'}>
        <Table className='table-pin-rows'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Kewarganegaraan</th>
              <th>Agama</th>
              <th>TTL</th>
              <th>Tanggal Masuk</th>
              <th>Tanggal Keluar</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pegawaiData.length > 0 ? (
              pegawaiData.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}.</td>
                    <td className='whitespace-nowrap'>{item.nama}</td>
                    <td>{item.kewarganegaraan}</td>
                    <td>{item.agama}</td>
                    <td className='whitespace-nowrap'>
                      {item.tempat_lahir},{' '}
                      {item.tanggal_lahir
                        ? dayjs(item.tanggal_lahir).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td className='whitespace-nowrap'>
                      {item.tanggal_masuk
                        ? dayjs(item.tanggal_masuk).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td className='whitespace-nowrap'>
                      {item.tanggal_keluar
                        ? dayjs(item.tanggal_keluar).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/master/pegawai/${item.id}`}
                        className='btn-info btn-sm'>
                        Edit
                      </LinkButton>
                      <PrimaryButton className='btn-accent btn-sm'>
                        Delete
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyRow colSpan={9} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
