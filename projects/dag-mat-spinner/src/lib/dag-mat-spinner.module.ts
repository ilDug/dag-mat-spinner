import { NgModule } from '@angular/core';
import { DagSpinnerDirective } from './dag-spinner.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { DagSpinnerComponent } from './dag-spinner/dag-spinner.component';

@NgModule({
    declarations: [DagSpinnerDirective, DagSpinnerComponent,],
    imports: [
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        CommonModule
    ],
    exports: [DagSpinnerDirective, DagSpinnerComponent]
})
export class DagMatSpinnerModule { }

