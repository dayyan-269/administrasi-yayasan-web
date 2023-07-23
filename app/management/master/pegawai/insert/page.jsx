import DashboardContainer from '@/components/Containers/DashboardContainer';
import TextInput from '@/components/Inputs/TextInput';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';

const Page = () => {
  return (
    <DashboardContainer>
      <h1 className='prose prose-xl'>Tambah Pegawai</h1>
      <div className='flex flex-col gap-y-3'>
        <TextInput label='Nama Pegawai' type='text' />
        <div className='flex flex-row gap-x-3'>
          <Select label='Kewarganegaraan'>
            <option value='WNA'>WNI</option>
            <option value='WNA'>WNA</option>
          </Select>
          <Select label='Agama/Aliran Kepercayaan'>
            <option value='islam'>Islam</option>
            <option value='katolik'>Kristen Katolik</option>
            <option value='protestan'>Kristen Protestan</option>
            <option value='budha'>Budha</option>
            <option value='hindu'>Hindu</option>
            <option value='konghuchu'>Konghuchu</option>
            <option value='aliran kepercayaan'>Aliran Kepercayaan</option>
          </Select>
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tempat Lahir' type='text' />
          <TextInput label='Tanggal Lahir' type='date' />
        </div>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Tanggal Masuk' type='date' />
          <TextInput label='Tanggal Keluar' type='date' />
        </div>
        <div className='divider my-2'></div>
        <h2 className='prose prose-xl'>Credential</h2>
        <div className='flex flex-row gap-x-3'>
          <TextInput label='Email' type='email' isRequired={true} />
          <TextInput label='Password' type='password' isRequired={true} />
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
