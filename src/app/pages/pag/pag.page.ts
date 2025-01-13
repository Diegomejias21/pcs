import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag',
  templateUrl: './pag.page.html',
  styleUrls: ['./pag.page.scss'],
  standalone: false,
})
export class PagPage implements OnInit {

  constructor(private router:Router) { }

  irProductos(){
    this.router.navigate(['/productos']);
  }

  ngOnInit() {
  }

}
