import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FactoryMethodSelectComponent } from './creational/factory-method-with-params/real-world/select.component';
import { FactoryMethodTextComponent } from './creational/factory-method-with-params/real-world/text.component';
import { FactoryMethodTextAreaComponent } from './creational/factory-method-with-params/real-world/textarea.component';
import { FactoryMethodCreatorComponent } from './creational/factory-method-with-params/real-world/creator.component';
import { FactoryMethodRealWorldComponent } from './creational/factory-method-with-params/real-world/real-world.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TooltipModule } from 'ng2-tooltip-directive';
import { FacadeRealWorldComponent } from './structural/facade/real-world/real-world.component';
import { TooltipFacadeComponent } from './structural/facade/real-world/tooltip-facade.component';
import { StrategyRealWorldComponent } from './behavioral/strategy/real-world/real-world.component';
import { FieldFormatterService } from './behavioral/strategy/real-world/fieldFormatter.service';
import { PageObjectRealWorldComponent } from './ui/page-object/real-world/real-world.component';
import { FlyweightRealWorldComponent } from './structural/flyweight/real-world/real-world.component';
import { OriginalInfoComponent } from './structural/flyweight/real-world/original-info.component';
import { RefactoredInfoComponent } from './structural/flyweight/real-world/refactored-info.component';
import { FlyweightDialogComponent } from './structural/flyweight/real-world/dialog.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: FactoryMethodRealWorldComponent },
      { path: 'facade', component: FacadeRealWorldComponent },
      { path: 'strategy', component: StrategyRealWorldComponent },
      { path: 'page-object', component: PageObjectRealWorldComponent },
      { path: 'flyweight', component: FlyweightRealWorldComponent }
    ]),
    TooltipModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent,
    FactoryMethodCreatorComponent,
    FactoryMethodRealWorldComponent,
    FacadeRealWorldComponent,
    TooltipFacadeComponent,
    StrategyRealWorldComponent,
    PageObjectRealWorldComponent,
    FlyweightRealWorldComponent,
    OriginalInfoComponent,
    RefactoredInfoComponent,
    FlyweightDialogComponent
  ],
  entryComponents: [
    FactoryMethodSelectComponent,
    FactoryMethodTextComponent,
    FactoryMethodTextAreaComponent
  ],
  providers: [FieldFormatterService],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/