export const getInventoris = async (token) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inventoris`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch inventoris: ${result.message}`);
  }

  return result.data;
};

export const getInventorisById = async (token, inventorisId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inventoris/${inventorisId}`,
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
      `failed to fetch inventoris with id ${inventorisId}: ${result.message}`
    );
  }

  return result.data;
};

export const getInventorisByAnakAsuhanId = async (token, anakAsuhanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inventoris/detail/${anakAsuhanId}`,
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
      `failed to fetch inventoris with id ${anakAsuhanId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertInventoris = async (token, inventoris) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/inventoris`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(inventoris),
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert inventoris: ${result.message}`);
  }

  return result.data;
};

export const updateInventoris = async (token, inventorisId, inventoris) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inventoris/${inventorisId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(inventoris),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update inventoris: ${result.message}`);
  }

  return result.data;
};

export const deleteInventoris = async (token, inventorisId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/inventoris/${inventorisId}`,
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
    throw new Error(`failed to delete inventoris: ${result.message}`);
  }

  return result.data;
};
