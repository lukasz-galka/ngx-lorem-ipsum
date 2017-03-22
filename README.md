# NgxLoremIpsum
Angular2 lorem ipsum generator

# Demo
[Link](https://lukasz-galka.github.io/ngx-lorem-ipsum-demo/)

# Installation
```npm install ngx-lorem-ipsum --save```

# Service Methods
- `get(count: number, paragraphsCount: number = 0): string` - gets sentences and paragraphs count and returns text
- `getRandom(min: number, max: number, paragraphsCount: number = 0): string ` - gets min/max for sentences count and paragraphs count and returns text 

(if paragraphsCount is 0 returns plain text, if paragraphsCount is N returns html with N paragraphs <p>)

# Service Usage
````ts
// app.module.ts
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';
...
@NgModule({
    imports: [
        ...
        NgxLoremIpsumModule
        ...
    ],
    ...
})
export class AppModule { }
````

````ts
// app.component.ts
import { NgxLoremIpsumService } from 'ngx-lorem-ipsum';
...

@Component({
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {    

    text: string;
    randomText: string;

    constructor(private service: NgxLoremIpsumService) {
        this.text = this.service.get(10, 2);
        this.randomText = this.service.getRandom(10, 20, 5);
    }
}

````

````html
// app.component.html
<div [innerHTML]="text"></div>
<div [innerHTML]="randomText"></div>
````

# Component Options
- `count` | Type: `number` - sentences count (ignored when min and max defined)
- `min` | Type: `number` - min sentences count
- `max` | Type: `number` - max sentences count
- `paragraphsCount` | Type: `number` | Default value: `0` - paragraphs count (if 0 returns plain text, if N returns html with N paragraphs <p>)

# Component Usage
````ts
// app.module.ts
import { NgxLoremIpsumModule } from 'ngx-lorem-ipsum';
...
@NgModule({
    imports: [
        ...
        NgxLoremIpsumModule
        ...
    ],
    ...
})
export class AppModule { }
````

````html
// app.component.html
<ngx-lorem-ipsum [count]="10"></ngx-lorem-ipsum>
<ngx-lorem-ipsum [count]="10" [paragraphsCount]="2"></ngx-lorem-ipsum>
<ngx-lorem-ipsum [min]="10" [max]="20" [paragraphsCount]="5"></ngx-lorem-ipsum>
````
