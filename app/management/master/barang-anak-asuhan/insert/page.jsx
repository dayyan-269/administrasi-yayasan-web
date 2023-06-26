import DashboardContainer from '@/components/Containers/DashboardContainer';
import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import TextArea from '@/components/Inputs/TextArea';

const Page = () => {
  return (
    <DashboardContainer>
      <h1 className='prose prose-xl'>Tambah Barang Anak</h1>

      <div className='flex flex-col gap-y-3'>
        <TextInput
          label='Nama Barang Medis'
          type='text'
          className='input-primary'
        />
        <TextArea
          label='Deskripsi Barang'
          type='text'
          className='textarea-primary'
        />
        <div className='flex flex-row gap-x-3'>
          <LinkButton
            className='w-fit btn-accent'
            href='/management/master/barang-anak-asuhan'>
            Cancel
          </LinkButton>
          <PrimaryButton className='w-fit btn-primary'>Submit</PrimaryButton>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Page;
