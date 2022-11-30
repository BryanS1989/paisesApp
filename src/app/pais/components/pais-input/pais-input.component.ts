import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
    selector: 'app-pais-input',
    templateUrl: './pais-input.component.html',
    styleUrls: []
})
export class PaisInputComponent implements OnInit {

    @Output() onEnter: EventEmitter<string> = new EventEmitter();       // Will emit when user push enter
    @Output() onDebounce: EventEmitter<string> = new EventEmitter();    // Will emit when user stops writting

    public debouncer: Subject<string> = new Subject();  // Is like an Observable
    public termino: string = '';


    /**
     * NgOnInit will be excuted one time when the component was created and initialized
     */
    ngOnInit(): void {
        console.log("[PaisModule] [PaisInputComponent] [ngOnInit()]");

        this.debouncer
            .pipe(
                // Do not continue to subscribe since the observable (debouncer) stop emitting values by 300ms
                debounceTime(300)
            )
            .subscribe((valor) => {
                console.log("[PaisModule] [PaisInputComponent] [ngOnInit()] [debouncer] valor", valor);
                this.onDebounce.emit(valor);
            });
    }

    buscar() {
        console.log("[PaisModule] [PaisInputComponent] [buscar()] termino: ", this.termino);

        this.onEnter.emit(this.termino);
    }

    teclaPresionada() {
        console.log("[PaisModule] [PaisInputComponent] [teclaPresionada()]");

        // Emit a value to debouncer
        this.debouncer.next(this.termino);

    }

}
