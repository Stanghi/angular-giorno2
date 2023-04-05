import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-giorno2';

  person = {
    nome: 'Mattia',
    congome: 'Stangherlin',
    date: '2001-06-02 13:00:00',
  };

  ngOnInit(): void {
    let currentDate: object = new Date();
    let birthdayDate: object = new Date(this.person.date);

    this.getAge(birthdayDate, currentDate);
  }

  getAge(birthdayDate: any, currentDate: any): void {
    let differenza = currentDate.getTime() - birthdayDate.getTime();

    let eta: number;
    if (
      currentDate.getMonth() >= birthdayDate.getMonth() &&
      currentDate.getDay() >= birthdayDate.getDay()
    ) {
      eta = currentDate.getYear() - birthdayDate.getYear();
    } else {
      eta = currentDate.getYear() - birthdayDate.getYear() - 1;
    }

    let giorni: number = Math.floor(differenza / (1000 * 3600 * 24));
    let ore: number = Math.floor(differenza / (1000 * 3600));
    let minuti: number = Math.floor(differenza / (1000 * 60));

    console.log(`Età di ${this.person.nome} = ${eta}`);
    console.log(`Giorni vissuti di ${this.person.nome} = ${giorni}`);
    console.log(`Ore vissute di ${this.person.nome} = ${ore}`);
    console.log(`Minuti vissuti di ${this.person.nome} = ${minuti}`);
  }
}
