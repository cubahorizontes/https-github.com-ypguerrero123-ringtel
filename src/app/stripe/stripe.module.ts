import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {StripePageRoutingModule} from './stripe-routing.module';

import {StripePage} from './component/stripe.page';
import {ToolbarModule} from '../shared/component/toolbar-page/toolbar.module';
import {CardModule} from 'ngx-card';
import {MaterialModule} from '../material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StripePageRoutingModule,
        ToolbarModule,
        CardModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [StripePage]
})
export class StripePageModule {
}
