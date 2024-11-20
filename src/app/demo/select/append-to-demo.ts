import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
    selector: 'append-to-demo',
    templateUrl: './append-to-demo.html',
})
export class AppendToDemoComponent {
    public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
        'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
        'Budapest', 'Cologne', 'Copenhagen'];

    public ngxControl1 = new UntypedFormControl();
    public ngxControl2 = new UntypedFormControl();
}
