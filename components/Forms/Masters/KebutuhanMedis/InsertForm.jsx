'use client';

import { useState } from 'react';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';

import { insertKebutuhanMedis } from '@/services/master/kebutuhanMedisService';

const InsertForm = ({ token }) => {
  const [nama, setNama] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);
  const [infoMessage, setInfoMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setSuccess = () => {
    setNama('');
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

      await insertKebutuhanMedis(token, data);
      setIsLoading(false);
      setSuccess();
    } catch (error) {
      console.error(error.message);
      setIsLoading(false);
      setError();
    }
  };

  return (
    <>
      <h1 className='prose prose-xl'>Tambah Kebutuhan Medis</h1>
      {infoMessage ? (
        <PrimaryAlert className='alert-success'>
          Tambah data kebutuhan medis berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Tambah data kebutuhan medis gagal.
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

export default InsertForm;
