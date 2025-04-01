export type Actions = {
  actions: {
    tx: {
      to: `0x${string}`;
      data: `0x${string}`;
      value: string;
      chainId: number;
    };
    description: string;
  }[];
  currentActionIndex: number;
};
