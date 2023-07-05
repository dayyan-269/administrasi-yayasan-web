const userReducer = async (user, action) => {
  switch (action.type) {
    case 'login': {
      action.data = user;
      return user;
    }

    case 'logout': {
      user = []
      return user;
    }

    default: {
      throw new Error('action type not found');
    }
  }
};

export default userReducer;
