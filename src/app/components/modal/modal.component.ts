import { Component } from '@angular/core';

export interface PersonElement {
  nome: string;
  position: number;
  eta: number;
  citta: string;
  altezza: number;
  nazionalita: string;
  professione: string;
}

const ELEMENT_DATA: PersonElement[] = [
  {
    position: 1,
    nome: 'Mattia',
    eta: 21,
    citta: 'Roma',
    altezza: 1.83,
    nazionalita: 'Italiana',
    professione: 'Dipendente',
  },
  {
    position: 2,
    nome: 'Letizia',
    eta: 19,
    citta: 'Valentano',
    altezza: 1.65,
    nazionalita: 'Italiana',
    professione: 'Studente',
  },
  {
    position: 3,
    nome: 'Alessandro',
    eta: 22,
    citta: 'Napoli',
    altezza: 1.75,
    nazionalita: 'Africana',
    professione: 'Dipendente',
  },
  {
    position: 4,
    nome: 'Massimo',
    eta: 21,
    citta: 'Roma',
    altezza: 1.74,
    nazionalita: 'Portoricana',
    professione: 'Studente',
  },
  {
    position: 5,
    nome: 'Patrizio',
    eta: 28,
    citta: 'Milano',
    altezza: 1.67,
    nazionalita: 'Tedesca',
    professione: 'Studente',
  },
  {
    position: 6,
    nome: 'Maurizio',
    eta: 57,
    citta: 'Genova',
    altezza: 1.81,
    nazionalita: 'Spagnola',
    professione: 'Dipendente',
  },
  {
    position: 7,
    nome: 'Nicola',
    eta: 36,
    citta: 'Roma',
    altezza: 1.82,
    nazionalita: 'Italiana',
    professione: 'Studente',
  },
  {
    position: 8,
    nome: 'Mauro',
    eta: 73,
    citta: 'Perugia',
    altezza: 1.59,
    nazionalita: 'Francese',
    professione: 'Pensione',
  },
  {
    position: 9,
    nome: 'Vanessa',
    eta: 46,
    citta: 'Roma',
    altezza: 1.79,
    nazionalita: 'Italiana',
    professione: 'Dipendente',
  },
  {
    position: 10,
    nome: 'Veronica',
    eta: 14,
    citta: 'Roma',
    altezza: 1.75,
    nazionalita: 'Italiana',
    professione: 'Studente',
  },
];

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  displayedColumns: string[] = [
    'position',
    'nome',
    'eta',
    'citta',
    'altezza',
    'nazionalita',
    'professione',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  onClick(element: any) {
    console.log(`
    Posizione = ${element.position}
    Nome = ${element.nome}
    Età = ${element.eta}
    Città = ${element.citta}
    Altezza = ${element.altezza}
    Nazionalità = ${element.nazionalita}
    Professione = ${element.professione}
    `);
  }
}
