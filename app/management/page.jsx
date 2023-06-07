import StatsContainer from '@/components/Stats/StatsContainer';
import StatsItem from '@/components/Stats/StatsItem';
import LineChart from '@/components/Charts/LineChart';
import DashboardContainer from '@/components/Containers/DashboardContainer';

export const metadata = {
  title: 'Dashboard Pegawai - Yayasan Bakti Luhur',
};

function Page() {
  return (
    <DashboardContainer>
      <div className='flex flex-col gap-y-3'>
        <h1 className='prose prose-xl font-bold'>Overview</h1>
        <div className='w-full flex flex-row justify-between gap-x-3'>
          <StatsContainer className='w-1/4'>
            <StatsItem className='bg-primary' title='Anak Asuh' />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem className='bg-primary' title='Obat-Obatan' />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem className='bg-primary' title='Pegawai' />
          </StatsContainer>
          <StatsContainer className='w-1/4'>
            <StatsItem className='bg-primary' title='Anak Asuh' />
          </StatsContainer>
        </div>
      </div>
      <div className='mt-3 flex flex-col gap-y-3'>
        <h1 className='prose prose-xl font-bold'>Finance</h1>
        <LineChart />
      </div>
    </DashboardContainer>
  );
}

export default Page;
