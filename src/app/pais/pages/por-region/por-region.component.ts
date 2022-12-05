import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [
    ]
})
export class PorRegionComponent {

    public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    public paises: Country[] = [];
    public regionActiva: string = '';

    constructor(
        private paisService: PaisService
    ) { }

    getClaseCss(region: string) {
        console.log("[PaisModule] [PorRegionComponent] [getClaseCss()] región: ", region);
        return (region === this.regionActiva) ? 'nav-link active' : 'nav-link';
    }

    activarRegion(region: string) {
        console.log("[PaisModule] [PorRegionComponent] [activarRegion()] región: ", region);
        if (region !== this.regionActiva) {
            this.regionActiva = region;

            this.buscarRegion();
        }
    }

    buscarRegion() {
        console.log("[PaisModule] [PorRegionComponent] [buscarRegion()] región: ", this.regionActiva);
        this.paises = [];

        this.paisService
            .getPaisesPorRegion(this.regionActiva)
            .subscribe((paises) => {
                console.log("[PaisModule] [PorRegionComponent] [buscarRegion()] paises: ", paises);
                this.paises = paises;
            });
    }

}
