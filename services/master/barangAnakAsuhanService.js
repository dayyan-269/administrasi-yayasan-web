export const getBarangAnakAsuhan = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/barang-anak`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch barang anak: ${result.message}`);
  }

  return result.data;
};

export const getBarangAnakAsuhanById = async (token, barangAnakId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/barang-anak/${barangAnakId}`,
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
      `failed to fetch barang anak with id ${barangAnakId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertBarangAnakAsuhan = async (token, barangAnak) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/barang-anak`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(barangAnak),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert barang anak: ${result.message}`);
  }

  return result.data;
};

export const updateBarangAnakAsuhan = async (
  token,
  barangAnakId,
  barangAnak
) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/barang-anak/${barangAnakId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(barangAnak),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update barang anak: ${result.message}`);
  }

  return result.data;
};

export const deleteBarangAnakAsuhan = async (token, barangAnakId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/barang-anak/${barangAnakId}`,
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
    throw new Error(`failed to delete barang anak: ${result.message}`);
  }

  return result.data;
};
