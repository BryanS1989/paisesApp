import { Component } from '@angular/core';
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

    constructor(private paisService: PaisService) { }

    buscar() {
        console.log("[PaisModule] [PorPaisComponent] [buscar()] termino: ", this.termino);

        this.hayError = false;

        this.paisService
            .buscarPais(this.termino)
            .subscribe({
                next: (paises) => {
                    console.log(paises);
                },
                error: (err) => {
                    this.hayError = true;
                    console.log("Error: ", err);
                }
            });
    }
}
