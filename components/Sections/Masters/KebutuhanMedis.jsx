'use client';

import { useEffect, useRef, useState } from 'react';

import Table from '@/components/Tables/Table';
import Card from '@/components/Cards/Card';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import LinkButton from '@/components/Buttons/LinkButton';
import DeleteModal from '@/components/Modals/DeleteModal';

import {
  getKebutuhanMedis,
  deleteKebutuhanMedis,
} from '@/services/master/kebutuhanMedisService';
import EmptyRow from '@/components/Tables/EmptyRow';

const KebutuhanMedisSection = async ({ token }) => {
  //const [kebutuhanId, setKebutuhanId] = useState(0);
  const [infoMessage, setInfoMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  const [kebutuhanMedis, setKebutuhanMedis] = useState([]);
  const kebutuhanId = useRef(0);

  const fetchData = async () => {
    try {
      const result = await getKebutuhanMedis(token);
      console.log(result);
      setKebutuhanMedis(result);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setInfo = () => {
    setInfoMessage(true);
    setErrorMessage(false);
  };

  const setError = () => {
    setInfoMessage(false);
    setErrorMessage(true);
  };

  const handleConfirmDelete = async (e) => {
    try {
      e.preventDefault();
      //const deleteRequest = await deleteKebutuhanMedis(token, id);
      console.log('val: ', kebutuhanId);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleDelete = (newId) => {
    kebutuhanId.current = newId;
    console.log('new ', kebutuhanId, 'old ', newId, kebutuhanId);
    window.deleteModal.showModal();
  };

  return (
    <>
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

      <Card title={'Data Kebutuhan Medis'}>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nama</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {kebutuhanMedis.length > 0 ? (
              kebutuhanMedis.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <th>{index + 1}.</th>
                    <td>{data.nama}</td>
                    <td className='flex flex-row gap-1'>
                      <LinkButton
                        href={`/management/master/kebutuhan-medis/${data.id}`}
                        className='btn-info'>
                        Edit
                      </LinkButton>
                      <PrimaryButton
                        className='btn-accent'
                        onClick={() => handleDelete(data.id)}>
                        Delete
                      </PrimaryButton>
                    </td>
                  </tr>
                );
              })
            ) : (
              <EmptyRow colSpan={3} />
            )}
          </tbody>
        </Table>
      </Card>
    </>
  );
};

export default KebutuhanMedisSection;
