import { ModuleWithProviders } from '@angular/core';
import { INgxSelectOptions } from './ngx-select.interfaces';
import * as i0 from "@angular/core";
import * as i1 from "./ngx-select.component";
import * as i2 from "./ngx-templates.directive";
import * as i3 from "./ngx-select-choices.component";
import * as i4 from "@angular/common";
export declare class NgxSelectModule {
    static forRoot(options: INgxSelectOptions): ModuleWithProviders<NgxSelectModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSelectModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NgxSelectModule, [typeof i1.NgxSelectComponent, typeof i2.NgxSelectOptionDirective, typeof i2.NgxSelectOptionSelectedDirective, typeof i2.NgxSelectOptionNotFoundDirective, typeof i3.NgxSelectChoicesComponent], [typeof i4.CommonModule], [typeof i1.NgxSelectComponent, typeof i2.NgxSelectOptionDirective, typeof i2.NgxSelectOptionSelectedDirective, typeof i2.NgxSelectOptionNotFoundDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NgxSelectModule>;
}
