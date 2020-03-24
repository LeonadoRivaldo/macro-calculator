import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private toastr: ToastrService) {}


  success(message) {
    this.toastr.success(message);
  }
  error(message) {
    this.toastr.error(message);
  }

}
