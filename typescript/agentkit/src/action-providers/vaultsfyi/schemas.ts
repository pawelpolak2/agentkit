import { z } from "zod";

/**
 * Action schemas for the vaultsfyi action provider.
 *
 * This file contains the Zod schemas that define the shape and validation
 * rules for action parameters in the vaultsfyi action provider.
 */

const networkSchema = z.enum([
  "mainnet",
  "arbitrum",
  "optimism",
  "polygon",
  "base",
  "gnosis",
  "unichain",
]);

/**
 * Vaults list action schema.
 */
export const vaultsActionSchema = z.object({
  /**
   * Optional: Name or symbol of the token to filter vaults by
   */
  token: z.string().optional(),

  /**
   * Optional: Protocol to filter vaults by
   */
  protocol: z.string().optional(),

  /**
   * Optional: Network name to filter vaults by
   * Supported networks: mainnet, arbitrum, optimism, polygon, base, gnosis, unichain
   */
  network: networkSchema.optional(),

  /**
   * Optional: Minimum TVL to filter vaults by
   */
  minTvl: z.number().optional(),

  /**
   * Whether to include only vaults that you can transact on (e.g. deposit, redeem) using the vaultsfyi provider
   */
  transactionalOnly: z.boolean().optional(),

  /**
   * Sort options
   */
  sort: z
    .object({
      /**
       * Sort field
       */
      field: z.enum(["tvl", "apy", "name"]).optional(),

      /**
       * Sort direction
       */
      direction: z.enum(["asc", "desc"]).optional(),
    })
    .optional(),

  /**
   * Optional: Limit the number of results
   */
  take: z.number().optional(),

  /**
   * Optional: Page number
   */
  page: z.number().optional(),
});

/**
 * Deposit action schema.
 */
export const depositActionSchema = z.object({
  /**
   * The address of the vault to deposit to
   */
  vaultAddress: z.string(),
  /**
   * The address of the token to deposit
   */
  assetAddress: z.string(),
  /**
   * The network of the vault
   */
  network: networkSchema,
  /**
   * The amount of assets to deposit
   */
  amount: z.number(),
});

export const redeemActionSchema = z.object({
  /**
   * The address of the vault to redeem from
   */
  vaultAddress: z.string(),
  /**
   * The address of the token to redeem
   */
  assetAddress: z.string(),
  /**
   * The network of the vault
   */
  network: networkSchema,
  /**
   * The amount of assets to redeem
   */
  lpAmount: z.number(),
  /**
   * Should redeem all assets
   */
  all: z.boolean().optional(),
});

export const claimActionSchema = z.object({
  /**
   * The address of the vault to claim from
   */
  vaultAddress: z.string(),
  /**
   * The address of the vaults token
   */
  assetAddress: z.string(),
  /**
   * The network of the vault
   */
  network: networkSchema,
});
