import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';
import EmptyRow from '@/components/Tables/EmptyRow';

function Page() {
  const pengobatanData = [];
  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/pengobatan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Pengobatan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Jenis Penyakit</th>
              <th>Tanggal Dipesan</th>
              <th>Tanggal Diterima</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {pengobatanData.length > 0 ? (
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Quality Control Specialist</td>
                <td>Quality Control Specialist</td>
                <td className='flex flex-row gap-1'>
                  <LinkButton
                    href='/management/master/barang-anak-asuhan/edit'
                    className='btn-info'>
                    Edit
                  </LinkButton>
                  <PrimaryButton className='btn-accent'>Delete</PrimaryButton>
                </td>
              </tr>
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
