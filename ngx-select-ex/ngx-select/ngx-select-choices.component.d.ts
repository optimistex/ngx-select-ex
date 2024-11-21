import { AfterContentInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { INgxSelectOption } from './ngx-select.interfaces';
import * as i0 from "@angular/core";
export interface NgxElementPosition {
    top: number;
    left: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
}
export declare class NgxSelectChoicesComponent implements OnInit, OnDestroy, OnChanges, AfterContentInit {
    private renderer;
    private ngZone;
    appendTo: string;
    show: boolean;
    selectionChanges: Observable<INgxSelectOption[]>;
    private choiceMenuEl;
    private selectEl;
    private destroy$;
    private disposeResizeListener;
    get position(): string;
    constructor(renderer: Renderer2, ngZone: NgZone, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    private appendChoiceMenu;
    private getAppendToElement;
    private handleDocumentResize;
    private delayedPositionUpdate;
    private updatePosition;
    private getStyles;
    private getStyleProp;
    private isStatic;
    private getOffsetParent;
    private getViewportOffset;
    private getParentOffset;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxSelectChoicesComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxSelectChoicesComponent, "ngx-select-choices", never, { "appendTo": { "alias": "appendTo"; "required": false; }; "show": { "alias": "show"; "required": false; }; "selectionChanges": { "alias": "selectionChanges"; "required": false; }; }, {}, never, ["*"], false, never>;
}
