'use client';

import { useEffect, useState } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import dayjs from 'dayjs';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';
import TextArea from '@/components/Inputs/TextArea';
import { getAnakAsuhan } from '@/services/master/anakAsuhanService';
import { insertJurnal } from '@/services/management/jurnalService';

const InsertForm = ({ token }) => {
  const [anakAsuhan, setAnakAsuhan] = useState('');
  const [anakAsuhanList, setAnakAsuhanList] = useState([]);
  const [tanggalDitambah, setTanggalDitambah] = useState('');
  const [aktivitas, setAktivitas] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setSuccess = () => {
    setAnakAsuhan('');
    setTanggalDitambah('');
    setAktivitas('');
    setDeskripsi('');

    setInfoMessage(true);
    setErrorMessage(false);
  };

  const setError = () => {
    setInfoMessage(false);
    setErrorMessage(true);
  };

  const fetchAnakAsuhanList = async (token) => {
    try {
      const result = await getAnakAsuhan(token);
      setAnakAsuhanList(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAnakAsuhanList(token);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const jurnal = {
        anak_asuhan_id: parseInt(anakAsuhan),
        tanggal: tanggalDitambah
          ? dayjs(tanggalDitambah).format('YYYY-MM-DD')
          : null,
        jenis_perilaku: aktivitas,
        penanganan: deskripsi,
      };
      console.log(jurnal);
      await insertJurnal(token, jurnal);
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
      {infoMessage ? (
        <PrimaryAlert className='alert-success'>
          Tambah data jurnal anak asuhan berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Tambah data jurnal anak asuhan gagal.
        </PrimaryAlert>
      ) : null}

      <h1 className='prose prose-xl'>Edit Jurnal Aktivitas</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-row gap-x-3'>
            <Select
              label='Nama Anak Asuh'
              onChange={(e) => setAnakAsuhan(e.target.value)}>
              {anakAsuhanList.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                    selected={item.id === anakAsuhan}>
                    {item.nama}
                  </option>
                );
              })}
            </Select>
            <TextInput
              label='Tanggal Ditambahkan'
              type='date'
              value={tanggalDitambah}
              onChange={(e) => setTanggalDitambah(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Jenis Aktivitas'
              type='text'
              value={aktivitas}
              onChange={(e) => setAktivitas(e.target.value)}
            />
          </div>
          <TextArea
            label='Deskripsi'
            onChange={(e) => setDeskripsi(e.target.value)}>
            {deskripsi}
          </TextArea>
          <div className='flex flex-row gap-x-3'>
            <LinkButton className='w-fit btn-accent' href='/management/jurnal'>
              <AiFillCloseCircle />
              Cancel
            </LinkButton>
            <PrimaryButton
              className='w-fit btn-primary'
              isLoading={isLoading}
              type='submit'>
              <AiFillCheckCircle />
              Submit
            </PrimaryButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default InsertForm;
