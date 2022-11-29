import { Component } from '@angular/core';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: []
})
export class PaisInputComponent {

    public termino: string = '';

    buscar() {
        console.log("[PaisModule] [PaisInputComponent] [buscar()] termino: ", this.termino);
    }

}
