import { cookies } from 'next/dist/client/components/headers';

const userReducer = async (credential, action) => {
  switch (action.type) {
    case 'login': {
      const request = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: 'POST',
          body: credential,
        }
      );

      if (!request.ok()) {
        console.error(request.json());
        throw new Error(request.message);
      }

      const result = await request.json();
      localStorage.setItem('token', result.jwt);

      return result.json().data;
    }

    case 'logout': {
      const token = cookies().get('token');

      const result = await fetch(`${process.env.API_URL}/auth/logout`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });

      if (!result.ok()) {
        console.error(result);
        return false;
      }

      return true;
    }

    default: {
      throw new Error('action type not found');
    }
  }
};

export default userReducer;
