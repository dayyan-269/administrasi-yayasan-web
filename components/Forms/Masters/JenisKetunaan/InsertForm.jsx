'use client';

import { useState } from 'react';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';

import { insertJenisKetunaan } from '@/services/master/jenisKetunaanService';

const InsertForm = ({ token }) => {
  const [nama, setNama] = useState('');
  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
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

  const handleSubmit = async () => {
    try {
      e.preventDefault();
      setIsLoading(true);

      const data = { nama };

      await insertJenisKetunaan(token, data);

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
      <h1 className='prose prose-xl'>Tambah Jenis Pembayaran</h1>

      {infoMessage ? (
        <PrimaryAlert className='alert-success'>
          Tambah data barang anak berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Tambah data barang anak gagal.
        </PrimaryAlert>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-3'>
          <TextInput
            label='Nama Jenis Ketunaan'
            type='text'
            className='input-primary'
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            isRequired={true}
          />
          <div className='flex flex-row gap-x-3'>
            <LinkButton
              className='w-fit btn-accent'
              href='/management/master/jenis-pembayaran'>
              Cancel
            </LinkButton>
            <PrimaryButton className='w-fit btn-primary' isLoading={isLoading}>
              Submit
            </PrimaryButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default InsertForm;
