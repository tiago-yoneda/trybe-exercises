const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('test to check if an user with the desired ID exists', () => {

it('should show the user for an existing ID', async () => {
  expect.assertions(2);
  await expect(getUserName(4)).resolves.toEqual('Mark');
  await expect(getUserName(5)).resolves.toEqual('Paul');
});
it('should give an error in case of an unexisting ID', async () => {
  try {
    await getUserName(1);
  } catch (error) {
    expect(error).toEqual({error: 'User with 1 not found.'});
  }
});

});

