import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
    selector: 'app-ver-pais',
    templateUrl: './ver-pais.component.html',
    styles: [
    ]
})
export class VerPaisComponent implements OnInit {

    constructor(
        private activatedRoute: ActivatedRoute,
        private paisService: PaisService
    ) { }

    ngOnInit(): void {
        // Nos subcribimos a los cambios de la ruta
        this.activatedRoute.params
            .subscribe(({ id }) => {    // Desestructurando params y quedandonos con la propiedad id
                console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] id: ", id);

                this.paisService
                    .getPaisPorAlpha(id)
                    .subscribe((pais) => {
                        console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] pais: ", pais);
                    });
            });
        /*
            Sin desestructurar los params:
            .subscribe((params) => {
                console.log("[PaisModule] [VerPaisComponent] [ngOnInit()] params: ", params);
            });
        */
    }

}
