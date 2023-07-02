'use client';

import PrimaryButton from '@/components/Buttons/PrimaryButton';

const DeleteModal = ({ children, title = '', id, handler }) => {
  return (
    <>
      <dialog id='deleteModal' className='modal'>
        <form className='modal-box' onSubmit={handler}>
          <h3 className='font-bold text-lg'>{title}</h3>
          <p className='py-4'>
            Apakah anda yakin ingin menghapus item ini? {id}
          </p>
          <div className='modal-action'>
            <PrimaryButton className='btn-error text-white' type='submit'>
              Hapus
            </PrimaryButton>
            <PrimaryButton formmethod='dialog'>Batal</PrimaryButton>
          </div>
        </form>
      </dialog>
    </>
  );
};

export default DeleteModal;
