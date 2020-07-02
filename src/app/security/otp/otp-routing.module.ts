import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OtpPage} from './component/otp.page';

const routes: Routes = [
    {
        path: '',
        component: OtpPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OtpPageRoutingModule {
}
