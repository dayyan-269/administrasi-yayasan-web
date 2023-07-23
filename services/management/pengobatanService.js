export const getPengobatan = async (token) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pengobatan`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch pengobatan: ${result.message}`);
  }

  return result.data;
};

export const getPengobatanById = async (token, pengobatanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pengobatan/${pengobatanId}`,
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
      `failed to fetch pengobatan with id ${pengobatanId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertPengobatan = async (token, pengobatan) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pengobatan`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: pengobatan,
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert pengobatan: ${result.message}`);
  }

  return result.data;
};

export const updatePengobatan = async (token, pengobatanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pengobatan/${pengobatanId}`,
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
    throw new Error(`failed to update pengobatan: ${result.message}`);
  }

  return result.data;
};

export const deletePengobatan = async (token, pengobatanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/pengobatan/${pengobatanId}`,
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
    throw new Error(`failed to delete pengobatan: ${result.message}`);
  }

  return result.data;
};
