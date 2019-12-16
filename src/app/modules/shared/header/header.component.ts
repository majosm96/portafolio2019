import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { 
  }

  ngOnInit() {
  }

  

  toggleMenu() {
    let menu = document.getElementById("navigation")    
    if (menu.style.display == "block"){
      menu.style.display = "none"
    } else {
      menu.style.display = "block"
    }
  }
  
}
