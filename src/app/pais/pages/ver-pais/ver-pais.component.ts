import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

// Switchmap: nos permite recibir un observable y retornar otro observable
// Tap: es un operador que dispara un efecto secundario
import { switchMap, tap } from 'rxjs/operators';
import { Country, Currencies, Translation } from '../../interfaces/pais.interface';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: [
    ]
})
export class VerPaisComponent implements OnInit {

    public pais!: Country;
    public translations: Translation[] = [];
    public currencies: Currencies[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService
    ) { }

    ngOnInit(): void {
        // Nos subcribimos a los cambios de la ruta
        this.activatedRoute.params
            .pipe(  // dentro de pipe podemos especificar cualquier operador Rxjs para trabajar con el producto del observable
                switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),  // switchmap resibe el observable params y retorna otro observable
                tap(console.log)    // imprimimos lo que retorne switchmap
            )
            .subscribe((pais) => {
                console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] pais: ", pais[0]);
                this.pais = pais[0];
                this.translations = Object.values(this.pais.translations);
                this.currencies = Object.values(this.pais.currencies);
            });

        /*
        this.activatedRoute.params
            .subscribe(({ id }) => {    // Desestructurando params y quedandonos con la propiedad id
                console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] id: ", id);

                this.paisService
                    .getPaisPorAlpha(id)
                    .subscribe((pais) => {
                        console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] pais: ", pais);
                    });
            });
        */
        /*
            Sin desestructurar los params:
            .subscribe((params) => {
                console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] params: ", params);
            });
        */
    }

}
