import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource {
  private surveys: Survey[] = [
    new Survey(
      new Date('2022-12-12'),
      new Date('2022-12-23'),
      1,
      'Why do people love React',
      'Benjamin Lefebvre',
      'Bengee',
      [
        {
          question: 'Why...?',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      []
    ),
    new Survey(
      new Date('2019-11-12'),
      new Date('2020-01-23'),
      2,
      'Habits of Canadians',
      'Mathis Boogie',
      'Math',
      [
        {
          question: 'What type...?',
          options: ['Option 1', 'Option 2'],
        },
        {
          question: 'Yes or No...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      []
    ),
    new Survey(
      new Date('2018-01-12'),
      new Date('2018-01-23'),
      3,
      'What is the most popular...',
      'Bob Desjardins',
      'bobby',
      [
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      []
    ),
    new Survey(
      new Date('2018-01-12'),
      new Date('2018-01-23'),
      4,
      'huefhwbfil gregjkwnl a',
      'Haaaaaaaaaa',
      'bdjwbef',
      [
        {
          question: 'Why...?',
          options: ['Option 1', 'Option 2', 'Option 3'],
        },
        {
          question: 'How...?',
          options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
        },
      ],
      []
    ),
  ];

  getSurveys(): Observable<Survey[]> {
    return from([this.surveys]);
  }
}
