import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  msg;
  constructor(private db: AngularFirestore) {

  }
  ngOnInit() {
    // this.db.collection('todos').valueChanges().subscribe(res => {
    //   console.log(res);
    //   this.msg = res;
    // })
    // for(var key:msg){

    // }
  }

}
