import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

function Page() {
  const anakAsuhan = [];
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
                <tr>
                  <th>{index + 1}</th>
                  <th className='whitespace-nowrap'>{data.nama}</th>
                  <td>
                    {data.tempat_lahir}, {data.tanggal_lahir}
                  </td>
                  <td>{data.asal}</td>
                  <td>
                    {data.tinggi_badan} cm & {data.berat_badan} kg
                  </td>
                  <td>-</td>
                  <td>-</td>
                  <td>{data.tanggal_masuk}</td>
                  <td>{data.tanggal_keluar}</td>
                  <td>-</td>
                  <td className='flex flex-row gap-1'>
                    <LinkButton
                      href='/management/master/pegawai/edit'
                      className='btn-info'>
                      Edit
                    </LinkButton>
                    <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
                  </td>
                </tr>;
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
