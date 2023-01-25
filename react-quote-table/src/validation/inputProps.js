const inputProps = {
  company: {
    maxLength: 15,
  },
  postalCode: {
    maxLength: 8,
    pattern: "d{3}-d{4}",
  },
  address: {
    maxLength: 40,
  },
  rep: {
    maxLength: 15,
  },
  subject: {
    maxLength: 18,
  },
  no: {
    maxLength: 10,
    pattern: "d{3}-d{4}",
  },
  quoteDate: {
    maxLength: 11,
  },
  ownCompany: {
    maxLength: 15,
  },
  ownPostalCode: {
    maxLength: 8,
    pattern: "d{3}-d{4}",
  },
  ownAddress: {
    maxLength: 40,
  },
  ownPhoneNumber: {
    maxLength: 15,
  },
  ownFax: {
    maxLength: 15,
  },
  ownEmail: {
    maxLength: 30,
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$",
  },
  ownRep: {
    maxLength: 15,
  },
  workDetail: {
    maxLength: 10,
  },
  unitPrice: {
    inputMode: "numeric",
    maxLength: 8,
  },
  quantity: {
    inputMode: "numeric",
    maxLength: 3,
  },
};

export default inputProps;
