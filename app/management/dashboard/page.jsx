import { cookies } from 'next/headers';

import StatsContainer from '@/components/Stats/StatsContainer';
import StatsItem from '@/components/Stats/StatsItem';
import LineChart from '@/components/Charts/LineChart';
import DashboardContainer from '@/components/Containers/DashboardContainer';

import { getDasboardStats } from '@/services/management/statsService';
import Table from '@/components/Tables/Table';
import EmptyRow from '@/components/Tables/EmptyRow';

export const metadata = {
  title: 'Dashboard Pegawai - Yayasan Bakti Luhur',
};

const getStatsData = async (token) => {
  try {
    const stats = await getDasboardStats(token);
    return stats;
  } catch (error) {
    console.error(error.message);
  }
};

async function Page() {
  const token = cookies().get('token').value;
  const statsData = await getStatsData(token);

  return (
    <DashboardContainer>
      <div className='flex flex-col gap-y-3'>
        <h1 className='prose prose-xl font-bold'>Overview</h1>
        <div className='w-full flex flex-row justify-between gap-x-3'>
          <StatsContainer className='w-1/4'>
            <StatsItem
              className='bg-primary'
              title='Anak Asuh'
              value={statsData?.anakAsuhanAmount}
            />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem
              className='bg-primary'
              title='Obat-Obatan'
              value={statsData?.barangAmount}
            />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem
              className='bg-primary'
              title='Pegawai'
              value={statsData?.pegawaiAmount}
            />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem
              className='bg-primary'
              title='Barang Anak'
              value={statsData?.anakAsuhanAmount}
            />
          </StatsContainer>
        </div>
      </div>
      <div className='mt-3 flex flex-col gap-y-3'>
        <div className='flex flex-col gap-y-3'>
          <h1 className='prose prose-xl font-bold'>Statistik</h1>
          <LineChart />
        </div>
        <div className='flex flex-col gap-y-3'>
          <h1 className='prose prose-xl font-bold'>Jurnal Terkini</h1>
          <Table>
            <thead>
              <tr>
                <th>Tanggal</th>
                <th>Anak Asuhan</th>
                <th>Jenis Perilaku</th>
              </tr>
            </thead>
            <tbody>
              <EmptyRow/>
            </tbody>
          </Table>
        </div>
      </div>
    </DashboardContainer>
  );
}

export default Page;
