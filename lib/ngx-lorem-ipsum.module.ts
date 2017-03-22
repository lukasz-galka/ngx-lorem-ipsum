import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxLoremIpsumService } from './ngx-lorem-ipsum.service';
import { NgxLoremIpsumComponent } from './ngx-lorem-ipsum.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ NgxLoremIpsumComponent ],
    exports: [ NgxLoremIpsumComponent ],
    providers: [ NgxLoremIpsumService ]
})
export class NgxLoremIpsumModule { }
