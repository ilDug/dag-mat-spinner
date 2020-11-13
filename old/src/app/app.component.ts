import { Component } from '@angular/core';

@Component({
  selector: 'dag-root',
  templateUrl: "app.component.html",
  styles: []
})
export class AppComponent {
    loading : boolean;
    spin(){
        this.loading = !this.loading;
        setTimeout(() => {
            this.loading = false;
        }, 250000);
    }
}
