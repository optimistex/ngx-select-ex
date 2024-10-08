import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NGX_SELECT_OPTIONS, NgxSelectComponent } from './ngx-select.component';
import { NgxSelectOptionDirective, NgxSelectOptionNotFoundDirective, NgxSelectOptionSelectedDirective } from './ngx-templates.directive';
import { INgxSelectOptions } from './ngx-select.interfaces';
import { NgxSelectChoicesComponent } from './ngx-select-choices.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [NgxSelectComponent,
        NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective, NgxSelectChoicesComponent,
    ],
    exports: [NgxSelectComponent,
        NgxSelectOptionDirective, NgxSelectOptionSelectedDirective, NgxSelectOptionNotFoundDirective,
    ],
})
export class NgxSelectModule {
    public static forRoot(options: INgxSelectOptions): ModuleWithProviders<NgxSelectModule> {
        return {
            ngModule: NgxSelectModule,
            providers: [{provide: NGX_SELECT_OPTIONS, useValue: options}],
        };
    }
}
