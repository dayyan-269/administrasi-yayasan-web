export const getJurnal = async (token) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/observasi`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: 'no-store',
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to fetch jurnal: ${result.message}`);
  }

  return result.data;
};

export const getJurnalById = async (token, jurnalId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/observasi/${jurnalId}`,
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
      `failed to fetch jurnal with id ${jurnalId}: ${result.message}`
    );
  }

  return result.data;
};

export const getJurnalByAnakAsuhanId = async (token, anakAsuhanId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/observasi/detail/${anakAsuhanId}`,
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
      `failed to fetch jurnal with anak asuhan id ${jurnalId}: ${result.message}`
    );
  }

  return result.data;
};

export const insertJurnal = async (token, jurnal) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/observasi`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(jurnal),
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to insert jurnal: ${result.message}`);
  }

  return result.data;
};

export const updateJurnal = async (token, jurnalId, jurnal) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/observasi/${jurnalId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(jurnal),
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`failed to update jurnal: ${result.message}`);
  }

  return result.data;
};

export const deleteJurnal = async (token, jurnalId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/observasi/${jurnalId}`,
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
    throw new Error(`failed to delete jurnal: ${result.message}`);
  }

  return result.data;
};
