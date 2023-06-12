import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DashboardContainer from '@/components/Containers/DashboardContainer';

function Page() {
  return (
    <DashboardContainer>
      <LinkButton
        href='/management/master/jenis-ketunaan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Jenis Ketunaan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td className='flex flex-row gap-1'>
                <LinkButton
                  href='/management/master/Jenis Ketunaan/edit'
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
