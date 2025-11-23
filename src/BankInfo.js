class BankInfo {
  static instance = null;
  constructor(name) {
    if (!BankInfo.instance) {
      this.name = name;
      BankInfo.instance = this;
    }
    return BankInfo.instance;
  }
}
export const bankInfo = new BankInfo("MyBank");
