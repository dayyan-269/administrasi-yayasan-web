'use client';

import { useEffect, useState } from 'react';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';
import TextArea from '@/components/Inputs/TextArea';

import { getBarangAnakAsuhan } from '@/services/master/barangAnakAsuhanService';
import {
  getInventorisById,
  updateInventoris,
} from '@/services/management/inventorisService';
import { getAnakAsuhan } from '@/services/master/anakAsuhanService';

const UpdateForm = ({ token, id }) => {
  const [tanggalDitambah, setTanggalDitambah] = useState('');
  const [anakAsuhan, setAnakAsuhan] = useState('');
  const [anakAsuhanList, setAnakAsuhanList] = useState([]);
  const [barang, setBarang] = useState('');
  const [barangList, setBarangList] = useState([]);
  const [jumlahBarang, setJumlahBarang] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const setSuccess = () => {
    setInfoMessage(true);
    setErrorMessage(false);
  };

  const setError = () => {
    setInfoMessage(false);
    setErrorMessage(true);
  };

  const fetchInventorisAnak = async (token, inventorisId) => {
    try {
      const result = await getInventorisById(token, inventorisId);
      console.log(result);
      setBarang(result.barang_anak_asuhan_id);
      setTanggalDitambah(result.tanggal_masuk);
      setAnakAsuhan(result.anak_asuhan_id);
      setJumlahBarang(result.kuantitas);
      setDeskripsi(result.keterangan);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchAnakAsuhanList = async (token) => {
    try {
      const result = await getAnakAsuhan(token);
      setAnakAsuhanList(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchBarangList = async (token) => {
    try {
      const result = await getBarangAnakAsuhan(token);
      setBarangList(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchAnakAsuhanList(token);
    fetchBarangList(token);
    fetchInventorisAnak(token, id);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const inventoris = {
        barang_anak_asuhan_id: barang,
        anak_asuhan_id: anakAsuhan,
        kuantitas: jumlahBarang,
        keterangan: deskripsi,
        tanggal_masuk: tanggalDitambah,
      };
      console.log(inventoris);
      await updateInventoris(token, id, inventoris);
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
          Tambah data inventoris anak asuhan berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Tambah data inventoris anak asuhan gagal.
        </PrimaryAlert>
      ) : null}

      <h1 className='prose prose-xl'>Tambah Inventoris Barang</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Tanggal Ditambahkan'
              type='date'
              value={tanggalDitambah}
              onChange={(e) => setTanggalDitambah(e.target.value)}
            />
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
          </div>
          <div className='flex flex-row gap-x-3'>
            <Select
              label='Nama Barang'
              onChange={(e) => setBarang(e.target.value)}>
              {barangList.map((item) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}
                    selected={item.id === barang}>
                    {item.nama}
                  </option>
                );
              })}
            </Select>
            <TextInput
              label='Jumlah Barang'
              type='number'
              value={jumlahBarang}
              onChange={(e) => setJumlahBarang(e.target.value)}
            />
          </div>
          <TextArea
            label='Deskripsi'
            onChange={(e) => setDeskripsi(e.target.value)}>
            {deskripsi}
          </TextArea>
          <div className='flex flex-row gap-x-3'>
            <LinkButton
              className='w-fit btn-accent'
              href='/management/inventoris'>
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

export default UpdateForm;
