import { Component } from '@angular/core';
import { INgxSelectOption } from 'app/lib/ngx-select/ngx-select.interfaces';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'custom-entries-demo',
    templateUrl: './custom-entries-demo.html',
})
export class CustomEntriesDemoComponent {
    public items: string[] = ['Ana', 'Aleyna', 'Barbara', 'Charlotte', 'Diana', 'Elise', 'Fiona', 'Gina', 'Helene', 'Irene', 'Jessica',
        'Katarina', 'Lea', 'Liara', 'Maria', 'Mara', 'Melanie', 'Natalie'];

    public ngxDisabled = false;
    public names = new FormControl();

    public doSelectOptions = (options: INgxSelectOption[]) => console.log('MultipleDemoComponent.doSelectOptions', options);

}
