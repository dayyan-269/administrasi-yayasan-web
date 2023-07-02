'use client';

import { useEffect, useState } from 'react';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import EmptyRow from '@/components/Tables/EmptyRow';

import { getBarangAnakAsuhan } from '@/services/master/barangAnakAsuhanService';

const BarangAnakAsuhan = ({ token }) => {
  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [barangAnak, setBarangAnak] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getBarangAnakAsuhan(token);
      console.log(data.length);
      setBarangAnak(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <LinkButton
        href='/management/master/barang-anak-asuhan/insert'
        className='w-fit btn-sm'>
        Tambah Data
      </LinkButton>
      <Card title={'Data Barang Anak Asuhan'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {barangAnak.length > 0 ? (
              barangAnak.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th>{index + 1}.</th>
                    <td>{data.nama}</td>
                    <td>{data.deskripsi ? data.deskripsi : '-'}</td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/master/barang-anak-asuhan/${data.id}`}
                        className='btn-info'>
                        Edit
                      </LinkButton>
                      <PrimaryButton className='btn-accent'>
                        Delete
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyRow colSpan={4} />
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default BarangAnakAsuhan;
