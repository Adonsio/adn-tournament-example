import { Component } from '@angular/core';
import {AdnTournament} from "@adonsio/adn-tournament/lib/declarations/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  example: AdnTournament = {
    rounds: [
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          }, {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          },
          {
            teams: [
              { name: 'Eternal Synergy Core', score: 1, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' },
              { name: 'Eternal Synergy', score: 2, img: 'https://eternal-synergy.com/img/logo_clean_w.png/' }]
          }
        ]
      }, {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [{ name: 'Team  A', score: 1 }, { name: 'Team  B', score: 2 }]
          },
          {
            teams: [{ name: 'Team  C', score: 1 }, { name: 'Team  D', score: 2 }]
          },
          {
            teams: [{ name: 'Team  E', score: 1 }, { name: 'Team  F', score: 2 }]
          },
          {
            teams: [{ name: 'Team  G', score: 1 }, { name: 'Team  H', score: 2 }]
          }
        ]
      },
      {
        type: 'Winnerbracket',
        matches: [
          {
            teams: [{ name: 'Team  B', score: 1 }, { name: 'Team  D', score: 2 }]
          },
          {
            teams: [{ name: 'Team  F', score: 1 }, { name: 'Team  H', score: 2 }]
          }
        ]
      },
      {
        type: 'Final',
        matches: [
          {
            teams: [
              {
                name: 'Team  D',
                score: 1
              },
              {
                name: 'Team  H',
                score: 2
              }
            ]
          },
        ]
      }
    ]
  };
}
