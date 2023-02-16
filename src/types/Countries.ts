export interface CountriesTS {
  code: string;
  currency: string;
  emoji: string;
  name: string;
  capital: string;
  phone: string;
  langiage: [
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
