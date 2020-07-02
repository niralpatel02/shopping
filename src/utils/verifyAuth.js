// Temporary credentials (reset every time server restarts)
const shopperCredentials = [
  { username: 'user', password: 'user' },
  { username: 'user2', password: 'user2' }
];

const shopOwnerCredentials = [
  { username: 'store1', password: 'store1' },
  { username: 'store2', password: 'store2' },
  { username: 'store3', password: 'store3' },
  { username: 'store4', password: 'store4' }
];

const adminCredentials = [
  { username: 'admin', password: 'admin' }
];


// Error messages
const incorrectCred = 'Incorrect username or password!';
const notRegistered = 'User is not registered!';
const passwordTooShot = 'Password too short! (minimum 4 characters)';
const confirmPassFails = 'Password don\'t match';
const dupUsername = 'Username already taken!';


// Login
const loginVerifyHelper = (username, password, credList) => {
  for (let index = 0; index < credList.length; index++) {
    if (credList[index].username === username) {
      return (credList[index].password === password) ? true : incorrectCred;
    }
  }
  return notRegistered;
};

export const loginVerify = (username, password, accountType) => {
  // Implement database access and query for user credential verification here.
  switch (accountType) {
    case 0:
      return loginVerifyHelper(username, password, shopperCredentials);
    case 1:
      return loginVerifyHelper(username, password, shopOwnerCredentials);
    case 2:
      return loginVerifyHelper(username, password, adminCredentials);
    default:
      return Error('Unknown account type');
  }
};


// Register
const registerVerifyHelper = (username, password, confirmPass, credList) => {
  if (password.length < 4) {
    return passwordTooShot;
  }

  if (password !== confirmPass) {
    return confirmPassFails;
  }

  for (let index = 0; index < credList.length; index++) {
    if (credList[index].username === username) {
      return dupUsername;
    }
  }
  return true;
};

export const registerVerify = (username, password, confirmPass, accountType) => {
  // Implement database access and query for user credential verification here.
  switch (accountType) {
    case 0:
      return registerVerifyHelper(username, password, confirmPass, shopperCredentials);
    case 1:
      return registerVerifyHelper(username, password, confirmPass, shopOwnerCredentials);
    default:
      return Error('Unknown account type');
  }
};


export const addNewUser = (username, password, accountType) => {
  switch (accountType) {
    case 0:
      shopperCredentials.push({ username: username, password: password });
      break;
    case 1:
      shopOwnerCredentials.push({ username: username, password: password });
      break;
    default:
      return Error('Unknown account type');
  }

};
