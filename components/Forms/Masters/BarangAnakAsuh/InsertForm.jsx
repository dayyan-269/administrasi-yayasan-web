'use client';

import { useState } from 'react';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import TextArea from '@/components/Inputs/TextArea';

import { insertBarangAnakAsuhan } from '@/services/master/barangAnakAsuhanService';

const InsertForm = ({ token }) => {
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setSuccess = () => {
    setNama('');
    setDeskripsi('');
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
        deskripsi,
      };

      await insertBarangAnakAsuhan(token, data);
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
      <h1 className='prose prose-xl'>Tambah Barang Anak</h1>

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
            label='Nama Barang Medis'
            type='text'
            className='input-primary'
            onChange={(e) => setNama(e.target.value)}
            value={nama}
            isRequired={true}
          />
          <TextArea
            label='Deskripsi Barang'
            type='text'
            className='textarea-primary'
            onChange={(e) => setDeskripsi(e.target.value)}>
            {deskripsi}
          </TextArea>

          <div className='flex flex-row gap-x-3'>
            <LinkButton
              className='w-fit btn-accent'
              href='/management/master/barang-anak-asuhan'>
              Cancel
            </LinkButton>
            <PrimaryButton
              className='w-fit btn-primary'
              type='submit'
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
