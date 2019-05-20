export const required = value => {
  return value == "" || value == null ? "You must complete this field" : true;
};

export const isCreditCard = str => {
  const match = /[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/;
  return !match.test(str) ? "You must enter a valid credit card number" : true;
};

export const isCCV = ccv =>
  !(ccv.length == 3 || ccv.length == 4)
    ? "The number must be between 3 and 4 characters"
    : true;

export const validateExpiration = expiration => {
  const today = new Date();
  const [month, year] = expiration.split("/");

  if (month > 12 || month < 1) {
    return "The format is MM/YY, please choose a valid month";
  }

  let expiryDate = new Date(`20${year}-${month}-01`);
  return !expiryDate > today ? "The credit card has expired" : true;
};
