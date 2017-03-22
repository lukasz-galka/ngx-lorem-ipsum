import { Component, Input, OnChanges, HostBinding } from '@angular/core';

import { NgxLoremIpsumService } from './ngx-lorem-ipsum.service';

@Component({
    selector: 'ngx-lorem-ipsum',
    template: ''
})
export class NgxLoremIpsumComponent {

    @Input() count: number;
    @Input() min: number;
    @Input() max: number;
    @Input() paragraphsCount: number = 0;

    @HostBinding('innerHTML') text: string;

    constructor(private service: NgxLoremIpsumService) {}

    ngOnChanges(): void {
        this.setText();
    }

    private setText(): void {
        if (this.min != undefined && this.max != undefined) {
            this.text = this.service.getRandom(+this.min, +this.max, +this.paragraphsCount);
        } else {
            this.text = this.service.get(+this.count, +this.paragraphsCount);
        }
    }
}
