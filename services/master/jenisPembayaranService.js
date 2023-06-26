export const getJenisPembayaran = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-pembayaran`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch jenis pembayaran: ${result.message}`);
  }

  return result.data;
};

export const getJenisPembayaranById = async (token, jenisPembayaranId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-pembayaran/${jenisPembayaranId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(
      `failed to fetch jenis pembayaran with id ${jenisPembayaranId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertJenisPembayaran = async (token, jenisPembayaran) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-pembayaran`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: jenisPembayaran,
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert jenis pembayaran: ${result.message}`);
  }

  return result.data;
};

export const updateJenisPembayaran = async (token, jenisPembayaranId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-pembayaran/${jenisPembayaranId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update jenis pembayaran: ${result.message}`);
  }

  return result.data;
};

export const deleteJenisPembayaran = async (token, jenisPembayaranId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-pembayaran/${jenisPembayaranId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to delete jenis pembayaran: ${result.message}`);
  }

  return result.data;
};
