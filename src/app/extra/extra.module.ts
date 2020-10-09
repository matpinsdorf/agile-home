import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TesteComponent } from 'src/app/extra/teste/teste.component';
import { ControllibModule } from 'node_modules/@tqssolucoes/agile-lib/src/app/main/ControlLib/controllib.module';
import { ControllibIgniteModule } from 'node_modules/@tqssolucoes/agile-lib/src/app/main/ControlLib-Ignite/controllib-ignite.module';



@NgModule({
  declarations: [TesteComponent],
  imports: [
    CommonModule,
    ControllibModule,
    FlexLayoutModule,
    ControllibIgniteModule
  ],
  entryComponents: [
    TesteComponent,
  ],

})
export class ExtraModule {
  public static componentMapper = {
      Teste: TesteComponent,
  };
}
