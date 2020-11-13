import { Directive, OnChanges, Input, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { DagSpinnerComponent } from './dag-spinner/dag-spinner.component';

@Directive({
  selector: '[dagSpinner]'
})
export class DagSpinnerDirective implements OnChanges {

    @Input() dagSpinner: boolean = false;

    // constructor(private vcr: ViewContainerRef, private cfr: ComponentFactoryResolver, private tpr: TemplateRef<any>) { }
    constructor(
        private vcr: ViewContainerRef,
        private cfr: ComponentFactoryResolver
    ) { }

    /** indice della view creata dall'attivazione dello spinner */
    private spinnerViewIndex: number = undefined;



    ngOnChanges() { this.load() }


    load() {
        if (this.dagSpinner) {
            /** svuota il container di tutto il contenuto */
            // if(this.hideContent) this.vcr.clear();

            /** crea il component dello spinner */
            const cf: ComponentFactory<DagSpinnerComponent> = this.cfr.resolveComponentFactory(DagSpinnerComponent)
            const cr: ComponentRef<DagSpinnerComponent> = this.vcr.createComponent(cf)
            this.spinnerViewIndex = this.vcr.indexOf(cr.hostView);
        } else {

            /** elimina lo spinenr */
            this.vcr.remove(this.spinnerViewIndex)

            /** metodo alternativo per eliminare lo spinner */
            // if(this.vcr.length > 0) this.vcr.clear()

            /** ripristina il contenuto */
            //    this.vcr.createEmbeddedView(this.tpr)
        }
    }


}
