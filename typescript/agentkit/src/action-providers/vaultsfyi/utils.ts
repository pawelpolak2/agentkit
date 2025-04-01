import { ApiVault } from "./types/vault";

/**
 * Get the link to the vaults.fyi page for a vault
 *
 * @param vault
 * @returns The link to the vaults.fyi page
 */
export function getVaultsLink(vault: ApiVault): string {
  if (vault.isTransactional) {
    return `https://app.vaults.fyi/opportunity/${vault.network}/${vault.address}`;
  } else {
    return `https://analytics.vaults.fyi/vaults/${vault.network}/${vault.address}`;
  }
}
