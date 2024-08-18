import { Component } from '@angular/core';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-angular-basic',
  templateUrl: './angular-basic.component.html',
  styleUrl: './angular-basic.component.css',
  // providers: [LoggingService]
})
export class AngularBasicComponent {
  // loggingService: any;

  constructor(private loggingService: LoggingService){
    this.loggingService.LogError()
  }

  test = "123"
  isDisabled = false
  name = "asmit"

  bgcolor = "blue"
  className ='testclass'
testclass: string|string[]|Set<string>|{ [klass: string]: any; };
}
