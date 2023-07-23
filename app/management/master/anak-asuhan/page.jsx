import { cookies } from 'next/headers';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

import { getAnakAsuhan } from '@/services/master/anakAsuhanService';
import dayjs from 'dayjs';

const fetchAnakAsuhan = async (token) => {
  try {
    return await getAnakAsuhan(token);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const anakAsuhan = await fetchAnakAsuhan(token);
  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/anak-asuhan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>

      <Card title={'Data Anak Asuhan'}>
        <Table className='table-pin-rows'>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>TTL</th>
              <th>Asal</th>
              <th>Tinggi Badan & Berat Badan</th>
              <th>Jenis Ketunaan</th>
              <th>Tipe Pembayaran</th>
              <th>Tanggal Masuk</th>
              <th>Tanggal Keluar</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {anakAsuhan.length > 0 ? (
              anakAsuhan.map((data, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <th className='whitespace-nowrap'>{data.nama}</th>
                    <td className='whitespace-nowrap'>
                      {data.tempat_lahir},{' '}
                      {dayjs(data.tanggal_lahir)
                        .locale('id')
                        .format('DD MMMM YYYY')}
                    </td>
                    <td>{data.asal}</td>
                    <td>
                      {data.tinggi_badan} cm & {data.berat_badan} kg
                    </td>
                    <td>{data.jenis_ketunaan.nama}</td>
                    <td>{data.tipe_pembayaran.nama}</td>
                    <td className='whitespace-nowrap'>
                      {dayjs(data.tanggal_masuk)
                        .locale('id')
                        .format('DD MMMM YYYY')}
                    </td>
                    <td className='whitespace-nowrap'>{data.tanggal_keluar}</td>
                    <td>-</td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/master/anak-asuhan/${data.id}`}
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
              <EmptyRow colSpan={11} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
