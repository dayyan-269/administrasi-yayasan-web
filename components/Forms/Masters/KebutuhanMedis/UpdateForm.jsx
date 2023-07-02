'use client';

import { useEffect, useState } from 'react';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';

import {
  getKebutuhanMedisById,
  updateKebutuhanMedis,
} from '@/services/master/kebutuhanMedisService';

const UpdateForm = ({ token, id }) => {
  const [nama, setNama] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [infoMessage, setInfoMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const data = await getKebutuhanMedisById(token, id);
    setNama(data.nama);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setSuccess = () => {
    setInfoMessage(true);
    setErrorMessage(false);
  };

  const setError = () => {
    setInfoMessage(false);
    setErrorMessage(true);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const data = {
        nama,
      };

      await updateKebutuhanMedis(token, id, data);

      setIsLoading(false);
      setSuccess();
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
      setError();
    }
  };

  return (
    <>
      <h1 className='prose prose-xl'>Edit Kebutuhan Medis</h1>
      {infoMessage ? (
        <PrimaryAlert className='alert-success'>
          Edit data kebutuhan medis berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Edit data kebutuhan medis gagal.
        </PrimaryAlert>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-3'>
          <TextInput
            label='Nama Barang Medis'
            type='text'
            name='nama'
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            isRequired={true}
          />
          <div className='flex flex-row gap-x-3'>
            <LinkButton
              className='w-fit btn-accent'
              href='/management/master/kebutuhan-medis'>
              Cancel
            </LinkButton>
            <PrimaryButton
              type='submit'
              className='w-fit btn-primary'
              isLoading={isLoading}>
              Submit
            </PrimaryButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default UpdateForm;
