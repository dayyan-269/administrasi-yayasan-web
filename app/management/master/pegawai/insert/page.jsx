import DashboardContainer from '@/components/Containers/DashboardContainer';
import TextInput from '@/components/Inputs/TextInput';
import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';

const Page = () => {
  return (
    <DashboardContainer>
      <h1 className='prose prose-xl'>Tambah Pegawai</h1>
      <div className='flex flex-col gap-y-3'>
        <TextInput label='Nama Jenis Pembayaran' type='text' />
        <div className='flex flex-row gap-x-3'>
          <Select label='Kewarganegaraan'></Select>
          <Select label='Agama/Aliran Kepercayaan'></Select>
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tempat Lahir' type='text' />
          <TextInput label='Tanggal Lahir' type='date' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tanggal Masuk' type='date' />
          <TextInput label='Tanggal Keluar' type='date' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <LinkButton
            className='w-fit btn-accent'
            href='/management/master/pegawai'>
            Cancel
          </LinkButton>
          <PrimaryButton className='w-fit btn-primary'>Submit</PrimaryButton>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
