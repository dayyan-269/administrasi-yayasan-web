export const getPegawai = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pegawai`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch pegawai: ${result.message}`);
  }

  return result.data;
};

export const getPegawaiById = async (token, pegawaiId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pegawai/${pegawaiId}`,
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
      `failed to fetch pegawai with id ${pegawaiId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertPegawai = async (token, pegawai) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pegawai`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(pegawai),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert pegawai: ${result.message}`);
  }

  return result;
};

export const updatePegawai = async (
  token,
  pegawaiId,
  pegawai
) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pegawai/${pegawaiId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(pegawai),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update pegawai: ${result.message}`);
  }

  return result.data;
};

export const deletePegawai = async (token, pegawaiId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pegawai/${pegawaiId}`,
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
    throw new Error(`failed to delete pegawai: ${result.message}`);
  }

  return result.data;
};
