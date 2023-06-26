import DashboardContainer from '@/components/Containers/DashboardContainer';
import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';

const Page = () => {
  return (
    <DashboardContainer>
      <h1 className='prose prose-xl'>Tambah Anak Asuhan</h1>

      <div className='flex flex-col gap-y-3'>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Nama Anak Asuh' type='text' />
          <TextInput label='Daerah Asal' type='text' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tempat Lahir' type='text' />
          <TextInput label='Tanggal Lahir' type='date' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tinggi Badan' type='number' />
          <TextInput label='Berat Badan' type='number' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <Select label='Tipe Pembayaran'></Select>
          <Select label='Jenis Ketunaan'></Select>
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tanggal Masuk' type='date' />
          <TextInput label='Tanggal Keluar' type='date' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <LinkButton
            className='w-fit btn-accent'
            href='/management/master/anak-asuhan'>
            Cancel
          </LinkButton>
          <PrimaryButton className='w-fit btn-primary'>Submit</PrimaryButton>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
