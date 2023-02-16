export interface CountryItemTS {
  code: string;
  currency: string;
  emoji: string;
  name: string;
  capital: string;
  phone: string;
  language: [
    {
      name: string;
      native: string;
    },
    {
      name: string;
      native: string;
    }
  ];
  continent: {
    name: string;
  };

}
