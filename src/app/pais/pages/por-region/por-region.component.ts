import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-por-region',
    templateUrl: './por-region.component.html',
    styles: [
    ]
})
export class PorRegionComponent {

    public regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
    public paises: Country[] = [];
    public regionActiva: string = this.regiones[0];

    constructor() { }

    getClaseCss(region: string) {
        console.log("[PaisModule] [PorRegionComponent] [getClaseCss()] región: ", region);
        return (region === this.regionActiva) ? 'nav-link active' : 'nav-link';
    }

    activarRegion(region: string) {
        console.log("[PaisModule] [PorRegionComponent] [activarRegion()] región: ", region);
        this.regionActiva = region;
    }

}
