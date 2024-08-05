import { action, observable, makeAutoObservable } from "mobx";

class mobileStore {
  @observable isMobile = false;

  constructor() {
    makeAutoObservable(this);
  }

  @action updateIsMobile() {
    this.isMobile = document.documentElement.clientWidth < 970;
  }
}

export default new mobileStore();
