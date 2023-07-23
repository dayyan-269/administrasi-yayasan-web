import { cookies } from 'next/headers';
import dayjs from 'dayjs';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

import { getJurnalByAnakAsuhanId } from '@/services/management/jurnalService';

const fetchJurnal = async (token, id) => {
  try {
    const result = await getJurnalByAnakAsuhanId(token, id);
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

async function Page({ params }) {
  const token = cookies().get('token').value;
  const id = params.id;
  const jurnalObservasi = await fetchJurnal(token, id);

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/jurnal/'
        className='w-fit btn-sm btn-neutral'>
        Kembali
      </LinkButton>
      <Card title={'Data Jurnal Aktivitas Anak Asuhan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Tanggal</th>
              <th>Jenis Perilaku</th>
              <th>Penanganan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jurnalObservasi.length > 0 ? (
              jurnalObservasi.map((data, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{data.anak_asuhan.nama}</td>
                    <td>
                      {data.tanggal
                        ? dayjs(data.tanggal).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td>{data.jenis_perilaku}</td>
                    <td>{data.penanganan}</td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/jurnal/${data.id}`}
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
              <EmptyRow colSpan={6} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
