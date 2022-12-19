import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedService } from './../../../sevice/shared.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

 
  constructor(public sharedService :SharedService){}
  ngOnInit(): void {
    this.sharedService.isLogged()
  //  this.sharedService.isAdmin()
  }

 
  
  logOut(){
    localStorage.removeItem('JWT')
    localStorage.removeItem('role')
    localStorage.setItem('isLogged','false')
  }

}
