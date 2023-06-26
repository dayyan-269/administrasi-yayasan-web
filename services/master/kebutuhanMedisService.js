export const getKebutuhanMedis = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kebutuhan-medis`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch kebutuhan medis: ${result.message}`);
  }

  return result.data;
};

export const getKebutuhanMedisById = async (token, kebutuhanMedisId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kebutuhan-medis/${kebutuhanMedisId}`,
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
      `failed to fetch kebutuhan medis with id ${kebutuhanMedisId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertKebutuhanMedis = async (token, kebutuhanMedis) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kebutuhan-medis`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: kebutuhanMedis,
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert kebutuhan medis: ${result.message}`);
  }

  return result.data;
};

export const updateKebutuhanMedis = async (token, kebutuhanMedisId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kebutuhan-medis/${kebutuhanMedisId}`,
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
    throw new Error(`failed to update kebutuhan medis: ${result.message}`);
  }

  return result.data;
};

export const deleteKebutuhanMedis = async (token, kebutuhanMedisId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/kebutuhan-medis/${kebutuhanMedisId}`,
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
    throw new Error(`failed to delete kebutuhan medis: ${result.message}`);
  }

  return result.data;
};
