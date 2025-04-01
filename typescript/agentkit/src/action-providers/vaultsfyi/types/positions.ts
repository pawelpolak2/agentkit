export type Positions = {
  [network: string]: {
    vaultName: string;
    vaultAddress: string;
    asset: {
      assetAddress: string;
      name: string;
      symbol: string;
      decimals: number;
    };
    balanceNative: string;
    balanceLp: string;
    unclaimedUsd: string;
    apy: number;
  }[];
};
