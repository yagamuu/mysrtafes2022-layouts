export namespace Alert {
  type Name =
    'OverwriteInformationConfirm';

  interface Dialog extends Window {
    openDialog: (
      opts: { name: Name, func?: (confirm: boolean) => void }
    ) => void;
  }
}
