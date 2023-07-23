import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';
import { cookies } from 'next/headers';
import { getInventorisByAnakAsuhanId } from '@/services/management/inventorisService';
import dayjs from 'dayjs';

const fetchInventorisAnak = async (token, anakAsuhanId) => {
  try {
    return await getInventorisByAnakAsuhanId(token, anakAsuhanId);
  } catch (error) {
    console.error(error.message);
  }
};

async function Page({ params }) {
  const token = cookies().get('token').value;
  const id = params.id;

  const inventorisData = await fetchInventorisAnak(token, id);

  return (
    <DashboardContainer>
      <LinkButton
        href='/management/inventoris'
        className='w-fit btn-sm btn-neutral'>
        Kembali
      </LinkButton>
      <Card title={'Data Inventoris Anak Asuhan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama Barang</th>
              <th>Kuantitas</th>
              <th>Keterangan</th>
              <th>Tanggal Masuk</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {inventorisData.length > 0 ? (
              inventorisData.map((item, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>{item.barang_anak_asuhan.nama}</td>
                    <td>{item.kuantitas}</td>
                    <td>{item.keterangan}</td>
                    <td>
                      {item.tanggal_masuk
                        ? dayjs(item.tanggal_masuk).format('DD MMMM YYYY')
                        : '-'}
                    </td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/inventoris/${id}`}
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
              <EmptyRow colSpan={7} />
            )}
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
