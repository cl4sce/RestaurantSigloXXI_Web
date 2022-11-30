import { action, makeAutoObservable, observable } from "mobx";

export class StoreImpl {
  totalInvoiceGlobal = 0;

  constructor() {
    makeAutoObservable(this, {
      totalInvoiceGlobal: observable,
      setTotalInvoice: action,
    });
  }

  setTotalInvoice(invoice) {
    this.totalInvoiceGlobal = invoice;
  }
}
export const Store = new StoreImpl();
