import { TestBed, fakeAsync, tick, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {MatTabsModule} from "@angular/material/tabs";
import { AppComponent } from './app.component';
import { NgxSelectModule } from './lib/public_api';
import { SelectSectionComponent } from './demo/select-section';
import { SampleSectionComponent } from './demo/sample-section.component';
import { SingleDemoComponent } from './demo/select/single-demo';
import { RichDemoComponent } from './demo/select/rich-demo';
import { MultipleDemoComponent } from './demo/select/multiple-demo';
import { ChildrenDemoComponent } from './demo/select/children-demo';
import { NoAutoCompleteDemoComponent } from './demo/select/no-autocomplete-demo';
import { AppendToDemoComponent } from './demo/select/append-to-demo';

describe('AppComponent', () => {
    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                NgxSelectModule,
                NoopAnimationsModule,
                MatTabsModule,
                CommonModule
            ],
            declarations: [
                AppComponent,
                SampleSectionComponent,
                SelectSectionComponent,
                ChildrenDemoComponent,
                MultipleDemoComponent,
                NoAutoCompleteDemoComponent,
                RichDemoComponent,
                SingleDemoComponent,
                AppendToDemoComponent,
            ],
        }).compileComponents();
    }));
    it('should create the app', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        fixture.detectChanges();
        tick(3000);
        expect(app).toBeTruthy();
        fixture.destroy();
    }));
});
