import Cookies from 'js-cookie';

export const login = async (credential) => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credential),
  });

  const result = await request.json();

  if (!request.ok) {
    throw new Error(result.message);
  }

  Cookies.set('token', result.data.jwt);

  return { token: result.data.jwt };
};

export const logout = async () => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`);

  if (!request.ok) {
    throw new Error(request.json());
  }

  Cookies.remove('token');

  return true;
};
