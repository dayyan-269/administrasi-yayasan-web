import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

function Page() {
  const jurnalObservasi = [];

  return (
    <DashboardContainer>
      <LinkButton href='/management/jurnal/insert' className='w-fit btn-sm'>
        Tambah Data
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
                <tr>
                  <th>{index + 1}</th>
                  <td>{data.anak_asuhan.nama}</td>
                  <td>{data.tanggal}</td>
                  <td>{data.jenis_perilaku}</td>
                  <td>-</td>
                  <td className='flex flex-row gap-1'>
                    <LinkButton
                      href='/management/master/barang-anak-asuhan/edit'
                      className='btn-info'>
                      Edit
                    </LinkButton>
                    <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
                  </td>
                </tr>;
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
