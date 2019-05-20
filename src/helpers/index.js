export const required = value => value !== "";

export const isCreditCard = str => {
  const match = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
  return match.test(str);
};

export const isCCV = ccv => ccv.length == 3 || ccv.length == 4;

export const validateExpiration = expiration => {
  const today = new Date();
  const [month, year] = expiration.split("/");

  if (month > 12 || month < 1) {
    return false;
  }

  let expiryDate = new Date(`20${year}-${month}-01`);
  return expiryDate > today;
};
