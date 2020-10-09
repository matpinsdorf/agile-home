import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { TesteComponent } from 'src/app/extra/teste/teste.component';
import { AppComponent } from './app.component';
import { Agile60Module } from '../../node_modules/@tqssolucoes/agile-lib/src/app/app.module';
import { AmbienteModule } from '../../node_modules/@tqssolucoes/agile-lib/src/app/main/Ambiente/ambiente.module';
import { ControllibModule } from 'node_modules/@tqssolucoes/agile-lib/src/app/main/ControlLib/controllib.module';
import { ControllibIgniteModule } from 'node_modules/@tqssolucoes/agile-lib/src/app/main/ControlLib-Ignite/controllib-ignite.module';




@NgModule({
  declarations: [
    AppComponent,
    TesteComponent,
  ],
  imports: [
    BrowserModule,
    Agile60Module,
    ControllibModule,
    FlexLayoutModule,
    AmbienteModule,
    ControllibIgniteModule

  ],

  exports: [
    Agile60Module,
    TesteComponent,

  ],

  entryComponents: [
    TesteComponent,
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
