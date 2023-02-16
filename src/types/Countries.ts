export interface CountriesTS {
  code: string;
  currency: string;
emoji:string;
  name: string;
  capital: string;
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
  region: {
    name: string;
  };
  numberCode: string;
  flag: {
    png: string;
  };
}
