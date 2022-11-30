import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: []
})
export class PaisInputComponent {

    @Output() onEnter: EventEmitter<string> = new EventEmitter();

    public termino: string = '';

    buscar() {
        console.log("[PaisModule] [PaisInputComponent] [buscar()] termino: ", this.termino);

        this.onEnter.emit(this.termino);
    }

}
