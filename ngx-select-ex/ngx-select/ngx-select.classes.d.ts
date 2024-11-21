import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { INgxSelectOptGroup, INgxSelectOption, INgxSelectOptionBase, TNgxSelectOptionType } from './ngx-select.interfaces';
export declare class NgxSelectOption implements INgxSelectOption, INgxSelectOptionBase {
    value: number | string;
    text: string;
    disabled: boolean;
    data: any;
    private _parent;
    readonly type: TNgxSelectOptionType;
    highlightedText: SafeHtml;
    active: boolean;
    constructor(value: number | string, text: string, disabled: boolean, data: any, _parent?: NgxSelectOptGroup);
    get parent(): NgxSelectOptGroup;
    private cacheHighlightText;
    private cacheRenderedText;
    renderText(sanitizer: DomSanitizer, highlightText: string): SafeHtml;
}
export declare class NgxSelectOptGroup implements INgxSelectOptGroup, INgxSelectOptionBase {
    label: string;
    options: NgxSelectOption[];
    readonly type: TNgxSelectOptionType;
    optionsFiltered: NgxSelectOption[];
    constructor(label: string, options?: NgxSelectOption[]);
    filter(callbackFn: (value: NgxSelectOption) => any): void;
}
export type TSelectOption = NgxSelectOptGroup | NgxSelectOption;
