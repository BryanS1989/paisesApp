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

    public termino: string = '';
    public hayError: boolean = false;
    public paises: Country[] = [];

    constructor(private paisService: PaisService) { }

    buscar() {
        console.log("[PaisModule] [PorPaisComponent] [buscar()] termino: ", this.termino);

        this.hayError = false;

        this.paisService
            .buscarPais(this.termino)
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
}
