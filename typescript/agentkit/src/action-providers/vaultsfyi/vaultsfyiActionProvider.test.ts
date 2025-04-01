import { VaultsfyiActionProvider } from "./vaultsfyiActionProvider";
import { Network } from "../../network";
import { vaultsActionSchema } from "./schemas";
import { EvmWalletProvider } from "../../wallet-providers";

describe("VaultsfyiActionProvider", () => {
  const provider = new VaultsfyiActionProvider();
  let mockWalletProvider: jest.Mocked<EvmWalletProvider>;

  beforeEach(() => {
    mockWalletProvider = {
      getAddress: jest.fn(),
      getBalance: jest.fn(),
      getName: jest.fn(),
      getNetwork: jest.fn().mockReturnValue({
        protocolFamily: "evm",
        networkId: "test-network",
      }),
      nativeTransfer: jest.fn(),
    } as unknown as jest.Mocked<EvmWalletProvider>;
  });

  describe("network support", () => {
    it("should support the protocol family", () => {
      expect(
        provider.supportsNetwork({
          protocolFamily: "evm",
        }),
      ).toBe(true);
    });

    it("should not support other protocol families", () => {
      expect(
        provider.supportsNetwork({
          protocolFamily: "other-protocol-family",
        }),
      ).toBe(false);
    });

    it("should handle invalid network objects", () => {
      expect(provider.supportsNetwork({} as Network)).toBe(false);
    });
  });

  describe("action validation", () => {
    it("should validate example action schema", () => {
      const validInput = {};
      const parseResult = vaultsActionSchema.safeParse(validInput);
      expect(parseResult.success).toBe(true);
    });

    it("should reject invalid example action input", () => {
      const invalidInput = {
        fieldName: "",
        amount: "invalid",
      };
      const parseResult = vaultsActionSchema.safeParse(invalidInput);
      expect(parseResult.success).toBe(false);
    });
  });

  describe("example action", () => {
    it("should execute example action with wallet provider", async () => {
      const args = {};
      const result = await provider.vaults(mockWalletProvider, args);
      expect(result.length).toBe(2);
    });
  });
});
