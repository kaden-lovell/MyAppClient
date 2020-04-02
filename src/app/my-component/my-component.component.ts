import { Component, OnInit } from '@angular/core';
import { MyComponentService } from './my-component.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],
  providers: [MyComponentService]
})
export class MyComponentComponent implements OnInit {
  model: any;
  ready: boolean;

  constructor(private readonly _myComponentService: MyComponentService) {}

  ngOnInit(): void {
    this.model = this._myComponentService
      .GetWeatherForcast()
      .subscribe(response => {
        this.model = response;
        this.ready = true;
      });
  }
}
