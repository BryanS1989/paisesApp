import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-por-pais',
    templateUrl: './por-pais.component.html',
    styles: [`
        li {
            cursor: pointer;
        }
    `]
})
export class PorPaisComponent {

    public paises: Country[] = [];
    public termino: string = '';
    public hayError: boolean = false;
    public placeholder: string = "Buscar País...";
    public paisesSugeridos: Country[] = [];
    public mostrarSugerencias: boolean = false;

    constructor(private paisService: PaisService) { }

    buscar(termino: string) {
        console.log("[PaisModule] [PorPaisComponent] [buscar()] termino: ", termino);

        this.hayError = false;
        this.termino = termino;
        this.mostrarSugerencias = false;

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

    buscarSugerencia(termino: string) {
        this.buscar(termino);
    }

    sugerencias(termino: string) {
        console.log("[PaisModule] [PorPaisComponent] [sugerencias()] termino: ", termino);
        this.mostrarSugerencias = true;
        this.hayError = false;
        this.termino = termino;

        this.paisService.buscarPais(termino).subscribe({
            next: (paises) => {
                console.log("[PaisModule] [PorPaisComponent] [sugerencias()] paises: ", paises);
                this.paisesSugeridos = paises.splice(0, 5);
            },
            error: (err) => {
                this.paisesSugeridos = [];
            }
        });
    }
}
