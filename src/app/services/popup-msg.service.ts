import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupMsgService {
  private show = false
  style = ''
  header = ''
  msg = ''
  timer: any


  constructor() { }


  dismiss(){
    this.show = false
    this.header = ''
    this.msg = ''
    this.style = ''
    if(this.timer) window.clearTimeout(this.timer)
  }

  showMsg(isError: boolean, msg: string): void{
    this.header = isError ? 'fa-exclamation-triangle text-danger' : 'fa-check-circle text-success'
    this.msg = msg
    this.style = isError ? 'error-msg' : 'success-msg'
    this.show = true
    this.timer = setTimeout(() => {
      this.dismiss()
      this.timer = undefined
    }, isError ? 10000 : 5000)
  }
}
