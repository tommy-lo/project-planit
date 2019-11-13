import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.css'],
})
export class StartpageComponent implements OnInit {
  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }

  form(){
  console.log("signup pressed")
  }
  signup(){
    this.router.navigate(['signup']);
  }
  signin(){
    this.router.navigate(['signin']);
  }
}
