import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';

function Page() {
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
            <tr>
              <th>1.</th>
              <th className='whitespace-nowrap'>Cy Gdnderton</th>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td className='flex flex-row gap-1'>
                <LinkButton
                  href='/management/master/pegawai/edit'
                  className='btn-info'>
                  Edit
                </LinkButton>
                <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </DashboardContainer>
  );
}

export default Page;
