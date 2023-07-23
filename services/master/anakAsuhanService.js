export const getAnakAsuhan = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anak-asuhan`,
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

export const getAnakAsuhanById = async (token, anakAsuhanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anak-asuhan/${anakAsuhanId}`,
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
      `failed to fetch barang anak with id ${anakAsuhanId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertAnakAsuhan = async (token, anakAsuhan) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anak-asuhan`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(anakAsuhan),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert barang anak: ${result.message}`);
  }

  return result.data;
};

export const updateAnakAsuhan = async (token, anakAsuhanId, anakAsuhan) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anak-asuhan/${anakAsuhanId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(anakAsuhan),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update barang anak: ${result.message}`);
  }

  return result.data;
};

export const deleteAnakAsuhan = async (token, anakAsuhanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/anak-asuhan/${anakAsuhanId}`,
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
