export const getDasboardStats = async (token) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/stats/dashboard-stats`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    }
  );

  const result = await request.json();

  if (!request.ok) {
    throw new Error(`fetch dashboard stats failed: ${result.message}`);
  }
  return result.data;
};
