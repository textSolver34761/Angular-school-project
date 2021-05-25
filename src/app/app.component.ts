import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


toggle = true;

enableDisableRule() {
  this.toggle = !this.toggle;
}

post =
  [
    {
      title: "I kind of wish this IKEA and Renault electric kit car concept was real",
      content: "This is an IKEA and Renault electric kit car concept designed by Ryan Schlotthauer for his bachelor thesis:\r\nIt's making the rounds on the internet as if it's a real project between Renault and IKEA,… [+2079 chars]",
      loveIts: 1,
      created_At: "2021-05-25T15:22:46Z"
    },
    {
      title: "Electric Hyundai Ioniq 5 debuts with fast charging and sleeper seats",
      content: "You'll have to be good at quick cat naps to take full advantage of the electric Hyundai Ioniq 5's unique abilities.\r\nThe 2022 Hyundai Ioniq 5\r\nThe compact utility vehicle will offer one of the quicke… [+2011 chars]",
      loveIts: 1,
      created_At: "2021-05-25T15:15:06Z"
    },
    {
      title: "EXCLUSIVE Ford follows GM, VW with two new dedicated EV platforms by 2025 -sources - Reuters",
      content: "Ford Motor Co (F.N) will announce on Wednesday that it is developing two dedicated all-electric vehicle platforms, one for full-size trucks and SUVs, the other for cars and smaller SUVs, as part of a… [+3817 chars]",
      loveIts: 34,
      created_At: "2021-05-25T15:07:00Z"
    },
    {
      title: "AT&S, Europe’s largest printed circuit boards maker, sets sights on China’s booming smart EV market",
      content: "Global chief executive Andreas Gerstenmayer told reporters via a webcast on Tuesday that autonomous driving and\r\ncommunication in had emerged as a new growth driver for AT&amp;S.\r\nWe are growing fast… [+1816 chars]",
      loveIts: 5,
      created_At: "2021-05-25T15:04:26Z"
    },
    {
      title: "Palantir Is A Better Tesla And Should Drive Stronger Returns",
      content: "Photo by Drew Angerer/Getty Images News via Getty Images\r\nTesla (NASDAQ:TSLA), as we've discussed separately, is one of the most overvalued companies in our opinion. The company trades at a massive v… [+5622 chars]",
      loveIts: 15,
      created_At: "2021-05-25T15:01:26Z",
    }
  ];
}
