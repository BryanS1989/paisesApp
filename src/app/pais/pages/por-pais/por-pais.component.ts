import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [
    ]
})
export class PorPaisComponent {

    public paises: Country[] = [];
    public termino: string = '';
    public hayError: boolean = false;
    public placeholder: string = "Buscar País...";

    constructor(private paisService: PaisService) { }

    buscar(termino: string) {
        console.log("[PaisModule] [PorPaisComponent] [buscar()] termino: ", termino);

        this.hayError = false;
        this.termino = termino;

        this.paisService
            .buscarPais(termino)
            .subscribe({
                next: (paises) => {
                    console.log("[PaisModule] [PorPaisComponent] [buscar()] paises: ", paises);
                    this.paises = paises;
                },
                error: (err) => {
                    console.log("[PaisModule] [PorPaisComponent] [buscar()] Error: ", err);
                    this.hayError = true;
                    this.paises = [];
                }
            });
    }

    sugerencias(termino: string) {
        console.log("[PaisModule] [PorPaisComponent] [sugerencias()] termino: ", termino);
        this.hayError = false;
        // TODO: Create suggestions
    }
}
