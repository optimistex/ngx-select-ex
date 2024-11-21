import { AfterContentChecked, DoCheck, ElementRef, EventEmitter, IterableDiffers, ChangeDetectorRef, TemplateRef, InjectionToken, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { NgxSelectOptGroup, NgxSelectOption, TSelectOption } from './ngx-select.classes';
import { NgxSelectOptionDirective, NgxSelectOptionNotFoundDirective, NgxSelectOptionSelectedDirective } from './ngx-templates.directive';
import { INgxOptionNavigated, INgxSelectOption, INgxSelectOptions, INgxSelectOptGroup } from './ngx-select.interfaces';
import * as i0 from "@angular/core";
export declare const NGX_SELECT_OPTIONS: InjectionToken<any>;
export interface INgxSelectComponentMouseEvent extends FocusEvent {
    clickedSelectComponent?: NgxSelectComponent;
}
export declare class NgxSelectComponent implements INgxSelectOptions, ControlValueAccessor, DoCheck, AfterContentChecked, OnDestroy {
    private sanitizer;
    private cd;
    items: any[];
    optionValueField: string;
    optionTextField: string;
    optGroupLabelField: string;
    optGroupOptionsField: string;
    multiple: boolean;
    allowClear: boolean;
    placeholder: string;
    noAutoComplete: boolean;
    disabled: boolean;
    defaultValue: any[];
    autoSelectSingleOption: boolean;
    autoClearSearch: boolean;
    noResultsFound: string;
    keepSelectedItems: boolean;
    size: 'small' | 'default' | 'large';
    searchCallback: (search: string, item: INgxSelectOption) => boolean;
    autoActiveOnMouseEnter: boolean;
    showOptionNotFoundForEmptyItems: boolean;
    isFocused: boolean;
    keepSelectMenuOpened: boolean;
    autocomplete: string;
    dropDownMenuOtherClasses: string;
    noSanitize: boolean;
    appendTo: string;
    keyCodeToRemoveSelected: string;
    keyCodeToOptionsOpen: string[];
    keyCodeToOptionsClose: string;
    keyCodeToOptionsSelect: string[];
    keyCodeToNavigateFirst: string;
    keyCodeToNavigatePrevious: string;
    keyCodeToNavigateNext: string;
    keyCodeToNavigateLast: string;
    typed: EventEmitter<string>;
    focus: EventEmitter<void>;
    blur: EventEmitter<void>;
    open: EventEmitter<void>;
    close: EventEmitter<void>;
    select: EventEmitter<any>;
    remove: EventEmitter<any>;
    navigated: EventEmitter<INgxOptionNavigated>;
    selectionChanges: EventEmitter<INgxSelectOption[]>;
    protected mainElRef: ElementRef;
    inputElRef: ElementRef;
    protected choiceMenuElRef: ElementRef;
    templateOption: TemplateRef<NgxSelectOptionDirective>;
    templateSelectedOption: TemplateRef<NgxSelectOptionSelectedDirective>;
    templateOptionNotFound: TemplateRef<NgxSelectOptionNotFoundDirective>;
    optionsOpened: boolean;
    optionsFiltered: TSelectOption[];
    private optionActive;
    private itemsDiffer;
    private defaultValueDiffer;
    private actualValue;
    subjOptions: BehaviorSubject<TSelectOption[]>;
    private subjSearchText;
    private subjOptionsSelected;
    private subjExternalValue;
    private subjDefaultValue;
    private subjRegisterOnChange;
    private cacheOptionsFilteredFlat;
    private cacheElementOffsetTop;
    private _focusToInput;
    /** @internal */
    get inputText(): any;
    constructor(iterableDiffers: IterableDiffers, sanitizer: DomSanitizer, cd: ChangeDetectorRef, defaultOptions: INgxSelectOptions);
    asGroup: (item: INgxSelectOption | INgxSelectOptGroup) => NgxSelectOptGroup;
    asOpt: (item: INgxSelectOption | INgxSelectOptGroup) => NgxSelectOption;
    setFormControlSize(otherClassNames?: object, useFormControl?: boolean): ({
        'form-control-sm input-sm': boolean;
        'form-control-lg input-lg': boolean;
    } | {
        'form-control-sm input-sm'?: undefined;
        'form-control-lg input-lg'?: undefined;
    }) & object;
    setBtnSize(): {
        'btn-sm': boolean;
        'btn-lg': boolean;
    };
    get optionsSelected(): NgxSelectOption[];
    mainClicked(event: INgxSelectComponentMouseEvent): void;
    choiceMenuFocus(event: INgxSelectComponentMouseEvent): void;
    documentClick(event: INgxSelectComponentMouseEvent): void;
    private optionsFilteredFlat;
    private navigateOption;
    ngDoCheck(): void;
    ngAfterContentChecked(): void;
    ngOnDestroy(): void;
    canClearNotMultiple(): boolean;
    focusToInput(): void;
    inputKeyDown(event: KeyboardEvent): void;
    trackByOption(index: number, option: TSelectOption): string | number;
    checkInputVisibility(): boolean;
    /** @internal */
    inputKeyUp(value: string, event: KeyboardEvent): void;
    /** @internal */
    inputClick(value?: string): void;
    /** @internal */
    sanitize(html: string): SafeHtml;
    /** @internal */
    highlightOption(option: NgxSelectOption): SafeHtml;
    /** @internal */
    optionSelect(option: NgxSelectOption, event?: Event): void;
    /** @internal */
    optionRemove(option: NgxSelectOption, event: Event): void;
    /** @internal */
    optionActivate(navigated: INgxOptionNavigated): void;
    /** @internal */
    onMouseEnter(navigated: INgxOptionNavigated): void;
    private filterOptions;
    private ensureVisibleElement;
    showChoiceMenu(): boolean;
    optionsOpen(search?: string): void;
    optionsClose(): void;
    private buildOptions;
    private buildOption;
    onChange: (v: any) => any;
    onTouched: () => void;
    writeValue(obj: any): void;
    registerOnChange(fn: (_: any) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSelectComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxSelectComponent, "ngx-select", never, { "items": { "alias": "items"; "required": false; }; "optionValueField": { "alias": "optionValueField"; "required": false; }; "optionTextField": { "alias": "optionTextField"; "required": false; }; "optGroupLabelField": { "alias": "optGroupLabelField"; "required": false; }; "optGroupOptionsField": { "alias": "optGroupOptionsField"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; "allowClear": { "alias": "allowClear"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "noAutoComplete": { "alias": "noAutoComplete"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "defaultValue": { "alias": "defaultValue"; "required": false; }; "autoSelectSingleOption": { "alias": "autoSelectSingleOption"; "required": false; }; "autoClearSearch": { "alias": "autoClearSearch"; "required": false; }; "noResultsFound": { "alias": "noResultsFound"; "required": false; }; "keepSelectedItems": { "alias": "keepSelectedItems"; "required": false; }; "size": { "alias": "size"; "required": false; }; "searchCallback": { "alias": "searchCallback"; "required": false; }; "autoActiveOnMouseEnter": { "alias": "autoActiveOnMouseEnter"; "required": false; }; "showOptionNotFoundForEmptyItems": { "alias": "showOptionNotFoundForEmptyItems"; "required": false; }; "isFocused": { "alias": "isFocused"; "required": false; }; "keepSelectMenuOpened": { "alias": "keepSelectMenuOpened"; "required": false; }; "autocomplete": { "alias": "autocomplete"; "required": false; }; "dropDownMenuOtherClasses": { "alias": "dropDownMenuOtherClasses"; "required": false; }; "noSanitize": { "alias": "noSanitize"; "required": false; }; "appendTo": { "alias": "appendTo"; "required": false; }; }, { "typed": "typed"; "focus": "focus"; "blur": "blur"; "open": "open"; "close": "close"; "select": "select"; "remove": "remove"; "navigated": "navigated"; "selectionChanges": "selectionChanges"; }, ["templateOption", "templateSelectedOption", "templateOptionNotFound"], never, false, never>;
}
