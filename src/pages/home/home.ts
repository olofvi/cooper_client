import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonProvider} from '../../providers/person/person';
import {PerfomanceDataProvider} from '../../providers/perfomance-data/perfomance-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(public navCtrl: NavController,
              public person: PersonProvider) {
    this.user = {distance: 1000, age: 20, gender: 'female'};
  }

  calculate(user) {
    this.person.doAssessment(user.distance);
    this.perfomanceData
      .saveData({performance_data: {data: {message: this.person.assessmentMessage}}})
      .subscribe(data => console.log(data));
  }

}
