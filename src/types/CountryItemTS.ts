export interface CountryItemTS {
  code: string;
  currency: string;
  emoji: string;
  name: string;
  capital: string;
  phone: string;
  languages: [
    {
      name: string;
      native: string;
      rtl: boolean;
    },
    {
      name: string;
      native: string;
      rtl: boolean;
    }
  ];
  continent: {
    name: string;
  };
}
