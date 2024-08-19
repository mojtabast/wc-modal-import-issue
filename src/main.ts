import { WalletConnectModal } from "@walletconnect/modal";

let web3Modal: WalletConnectModal;
export function createModalInstance(projectId: string) {
  if (!web3Modal) {
    web3Modal = new WalletConnectModal({
      projectId,
      themeMode: "light",
      themeVariables: {
        "--wcm-z-index": "999999999",
      },
    });
  }
}
