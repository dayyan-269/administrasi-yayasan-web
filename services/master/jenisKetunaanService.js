export const getJenisKetunaan = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-ketunaan`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch jenis ketunaan: ${result.message}`);
  }

  return result.data;
};

export const getJenisKetunaanById = async (token, jenisKetunaanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-ketunaan/${jenisKetunaanId}`,
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
      `failed to fetch jenis ketunaan with id ${jenisKetunaanId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertJenisKetunaan = async (token, jenisKetunaan) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-ketunaan`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(jenisKetunaan),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert jenis ketunaan: ${result.message}`);
  }

  return result.data;
};

export const updateJenisKetunaan = async (
  token,
  jenisKetunaanId,
  jenisKetunaan
) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-ketunaan/${jenisKetunaanId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(jenisKetunaan),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update jenis ketunaan: ${result.message}`);
  }

  return result.data;
};

export const deleteJenisKetunaan = async (token, jenisKetunaanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/jenis-ketunaan/${jenisKetunaanId}`,
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
    throw new Error(`failed to delete jenis ketunaan: ${result.message}`);
  }

  return result.data;
};
