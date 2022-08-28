import { Component, OnInit } from '@angular/core';
import { ClockService } from 'src/app/services/clock.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  constructor(public clock: ClockService) {
  }

  ngOnInit(): void {
  }

  togglePlay() {
    this.clock.play_pause_btn();
  }

  speed() {
    this.clock.changeSpeed(this.clock.period / 2);
  }

}
