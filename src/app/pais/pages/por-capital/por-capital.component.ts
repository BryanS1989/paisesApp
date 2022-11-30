import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-capital',
    templateUrl: './por-capital.component.html',
    styles: [
    ]
})
export class PorCapitalComponent {

    public paises: Country[] = [];
    public termino: string = '';
    public hayError: boolean = false;
    public placeholder: string = "Buscar Capital...";

    constructor(private paisService: PaisService) { }

    buscar(termino: string) {

        console.log("[PaisModule] [PorCapitalComponent] [buscar()] termino: ", termino);

        this.hayError = false;
        this.termino = termino;

        this.paisService
            .buscarCapital(termino)
            .subscribe({
                next: (paises) => {
                    console.log("[PaisModule] [PorCapitalComponent] [buscar()] paises: ", paises);
                    this.paises = paises;
                },
                error: (err) => {
                    console.log("[PaisModule] [PorCapitalComponent] [buscar()] Error: ", err);
                    this.hayError = true;
                    this.paises = [];
                }
            });

    }

}
