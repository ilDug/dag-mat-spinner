import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <!--The content below is only a placeholder and can be replaced.-->
 <div [dagSpinner]="loading">
    <h1>ciao</h1>
    <button (click)="spin()">load</button>
</div>
    
  `,
    styles: []
})
export class AppComponent {
    loading: boolean;

    spin() {
        this.loading = !this.loading;
        setTimeout(() => {
            this.loading = false;
        }, 5000);
    }
}
