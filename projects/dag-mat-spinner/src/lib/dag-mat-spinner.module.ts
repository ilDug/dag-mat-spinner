import { NgModule } from '@angular/core';
import { DagSpinnerDirective } from './dag-spinner.directive';
import { DagSpinnerComponent } from './dag-spinner/dag-spinner.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
    declarations: [DagSpinnerDirective, DagSpinnerComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
    ],
    exports: [DagSpinnerDirective, DagSpinnerComponent],
    entryComponents: [DagSpinnerComponent]
}) export class DagMatSpinnerModule { }
