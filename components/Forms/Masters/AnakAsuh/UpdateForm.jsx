'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

import PrimaryAlert from '@/components/Alerts/PrimaryAlert';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import TextInput from '@/components/Inputs/TextInput';
import LinkButton from '@/components/Buttons/LinkButton';
import Select from '@/components/Inputs/Select';

import {
  updateAnakAsuhan,
  getAnakAsuhanById,
} from '@/services/master/anakAsuhanService';
import { getJenisKetunaan } from '@/services/master/jenisKetunaanService';
import { getJenisPembayaran } from '@/services/master/jenisPembayaranService';

const InsertForm = ({ token, id }) => {
  const [anakAsuhan, setAnakAsuhan] = useState([]);

  const [nama, setNama] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [tempatLahir, setTempatLahir] = useState('');
  const [daerahAsal, setDaerahAsal] = useState('');
  const [tinggiBadan, setTinggiBadan] = useState('');
  const [beratBadan, setBeratBadan] = useState('');
  const [tanggalMasuk, setTanggalMasuk] = useState('');
  const [tanggalKeluar, setTanggalKeluar] = useState('');
  const [jenisKetunaan, setJenisKetunaan] = useState('');
  const [tipePembayaran, setTipePembayaran] = useState('');

  const [jenisKetunaanList, setJenisKetunaanList] = useState([]);
  const [tipePembayaranList, setTipePembayaranList] = useState([]);

  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchJenisKetunaan = async (token) => {
    try {
      const result = await getJenisKetunaan(token);
      setJenisKetunaanList(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchTipePembayaran = async (token) => {
    try {
      const result = await getJenisPembayaran(token);
      setTipePembayaranList(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchAnakAsuhan = async (token, id) => {
    try {
      const result = await getAnakAsuhanById(token, id);

      setNama(result.nama);
      setTanggalLahir(result.tanggal_lahir);
      setTempatLahir(result.tempat_lahir);
      setDaerahAsal(result.asal);
      setTinggiBadan(result.tinggi_badan);
      setBeratBadan(result.berat_badan);
      setTanggalMasuk(result.tanggal_masuk);
      setTanggalKeluar(result.tanggal_keluar);
      setJenisKetunaan(result.jenis_ketunaan_id);
      setTipePembayaran(result.tipe_pembayaran);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchJenisKetunaan(token);
    fetchTipePembayaran(token);
    fetchAnakAsuhan(token, id);
  }, []);

  const setSuccess = () => {
    setNama('');
    setTanggalLahir('');
    setTempatLahir('');
    setDaerahAsal('');
    setTinggiBadan('');
    setBeratBadan('');
    setTanggalMasuk('');
    setTanggalKeluar('');
    setJenisKetunaan('');
    setTipePembayaran('');

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

      const anakAsuhan = {
        nama: nama,
        tanggal_lahir: tanggalLahir
          ? dayjs(tanggalLahir).format('YYYY-MM-DD')
          : null,
        tempat_lahir: tempatLahir,
        asal: daerahAsal,
        tinggi_badan: parseInt(tinggiBadan),
        berat_badan: parseInt(beratBadan),
        tanggal_masuk: tanggalMasuk
          ? dayjs(tanggalMasuk).format('YYYY-MM-DD')
          : null,
        tanggal_keluar: tanggalKeluar
          ? dayjs(tanggalKeluar).format('YYYY-MM-DD')
          : null,
        jenis_ketunaan_id: parseInt(jenisKetunaan),
        tipe_pembayaran_id: parseInt(tipePembayaran),
      };

      await updateAnakAsuhan(token, id, anakAsuhan);

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
      <h1 className='prose prose-xl'>Edit Anak Asuhan</h1>

      {infoMessage ? (
        <PrimaryAlert className='alert-success'>
          Edit data anak asuhan berhasil.
        </PrimaryAlert>
      ) : null}

      {errorMessage ? (
        <PrimaryAlert type='error' className='alert-error'>
          Edit data anak asuhan gagal.
        </PrimaryAlert>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div className='flex flex-col gap-y-3'>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Nama Anak Asuh'
              type='text'
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <TextInput
              label='Daerah Asal'
              type='text'
              value={daerahAsal}
              onChange={(e) => setDaerahAsal(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Tempat Lahir'
              type='text'
              value={tempatLahir}
              onChange={(e) => setTempatLahir(e.target.value)}
            />
            <TextInput
              label='Tanggal Lahir'
              type='date'
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Tinggi Badan'
              type='number'
              value={tinggiBadan}
              onChange={(e) => setTinggiBadan(e.target.value)}
            />
            <TextInput
              label='Berat Badan'
              type='number'
              value={beratBadan}
              onChange={(e) => setBeratBadan(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-x-3'>
            <Select
              label='Jenis Ketunaan'
              onChange={(e) => setJenisKetunaan(e.target.value)}>
              {jenisKetunaanList.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item.id}
                    selected={item.id === jenisKetunaan ? true : false}>
                    {item.nama}
                  </option>
                );
              })}
            </Select>
            <Select
              label='Tipe Pembayaran'
              onChange={(e) => setTipePembayaran(e.target.value)}>
              {tipePembayaranList.map((item, index) => {
                return (
                  <option
                    key={index}
                    value={item.id}
                    selected={item.id === tipePembayaran ? true : false}>
                    {item.nama}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className='flex flex-row gap-x-3'>
            <TextInput
              label='Tanggal Masuk'
              type='date'
              value={tanggalMasuk}
              onChange={(e) => setTanggalMasuk(e.target.value)}
            />
            <TextInput
              label='Tanggal Keluar'
              type='date'
              value={tanggalKeluar}
              onChange={(e) => setTanggalKeluar(e.target.value)}
            />
          </div>
          <div className='flex flex-row gap-x-3'>
            <LinkButton
              className='w-fit btn-accent'
              href='/management/master/anak-asuhan'>
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
