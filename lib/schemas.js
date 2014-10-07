Schemas = {};

Schemas.Profile = new SimpleSchema({
  fullname: {
    type: String,
    label: "Full Legal Name",
    min: 2,
    max: 100
  },
  nickname: {
    type: String,
    label: "Nickname",
    min: 2,
    max: 30,
    optional: true
  },
})

Schemas.AddressDetails = new SimpleSchema({
  address_line_1: {
    type: String,
    max: 100
  },
  address_line_2: {
    type: String,
    max: 100,
    optional: true
  },
  city: {
    type: String,
    max: 50
  },
  county: {
    type: String,
    max: 50
  },
  postcode: {
    type: String,
    max: 8
  }
});

Schemas.ContactDetails = new SimpleSchema({
  phone: {
    type: String
  },
  address: {
    type: Schemas.AddressDetails
  }
});