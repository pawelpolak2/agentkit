export type Balances = {
  [network: string]: {
    address: string;
    name: string;
    symbol: string;
    balance: string;
    decimals: number;
  }[];
};
