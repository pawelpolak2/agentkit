export type ApiVault = {
  name: string;
  address: string;
  network: string;
  protocol: string;
  tvlDetails: {
    tvlNative: string;
    tvlUsd: string;
    lockedNative: string;
    lockedUsd: string;
    liquidNative: string;
    liquidUsd: string;
  };
  numberOfHolders: number;
  lendLink: string;
  tags: string[];
  token: {
    name: string;
    assetAddress: string;
    assetCaip: string;
    symbol: string;
    decimals: number;
  };
  apy: {
    base: {
      "1day": number;
      "7day": number;
      "30day": number;
    };
    rewards: {
      "1day": number;
      "7day": number;
      "30day": number;
    };
    total: {
      "1day": number;
      "7day": number;
      "30day": number;
    };
  };
  description: string;
  additionalIncentives: string;
  rewards: {
    apy: {
      "1day": number;
      "7day": number;
      "30day": number;
    };
    assetPriceInUsd: number;
    asset: {
      name: string;
      assetAddress: string;
      assetCaip: string;
      symbol: string;
      decimals: number;
    };
  }[];
  isTransactional: boolean;
  score: {
    vaultScore: number;
    vaultTvlScore: number;
    protocolTvlScore: number;
    holderScore: number;
    networkScore: number;
    assetScore: number;
  };
};

export type Vault = {
  name: string;
  address: string;
  protocol: string;
  network: string;
  tvlInUsd: number;
  apy: {
    base: number;
    rewards: number | undefined;
    total: number;
  };
  token: {
    address: string;
    name: string;
    symbol: string;
  };
  link: string;
  isTransactional: boolean;
};
