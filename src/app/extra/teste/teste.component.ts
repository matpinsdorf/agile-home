import { Component, OnInit, Injector, ViewChild, DoCheck, ViewEncapsulation } from '@angular/core';
import { ComponenteRefService } from 'node_modules/agile60/src/app/main/Core/componente-ref.service';
import { ControlLibService } from 'node_modules/agile60/src/app/main/ControlLib/controllib.service';
import { MatDialog } from '@angular/material/dialog';
import { FrmobjectCadastroComponent } from 'node_modules/agile60/src/app/main/Cadastro/frmobject-cadastro/frmobject-cadastro.component';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.scss']
})
export class TesteComponent extends FrmobjectCadastroComponent implements OnInit {

    constructor(
      componenteRefService: ComponenteRefService,
      controllibService: ControlLibService,
      dialog: MatDialog,
      injector: Injector
  ) {
      super(componenteRefService, controllibService, dialog, injector);
  }

  ngOnInit(): void {

  }

}
