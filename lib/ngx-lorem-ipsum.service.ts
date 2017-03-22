import { Injectable } from '@angular/core';

@Injectable()
export class NgxLoremIpsumService {

    private text: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    get(count: number, paragraphsCount: number = 0): string {
        let sentences = this.text.repeat(Math.ceil(count / this.text.match(/\./g).length))
            .split('.').slice(0, count).map(s => s.trim() + '.');

        if(paragraphsCount > count) {
            return '';
        } else {
            return paragraphsCount != 0 ? this.getParagraphs(sentences, paragraphsCount) : sentences.join(' ');
        }
    }

    getRandom(min: number, max: number, paragraphsCount: number = 0): string {
        return this.get(this.getRandomNumber(min, max), paragraphsCount);
    }

    private getParagraphs(sentences: string[], count): string {
        let paragraphs = '';
        let part = Math.floor(sentences.length / count);
        let index = 0;

        while(sentences.length) {
            paragraphs += '<p>' + sentences.splice(0, index + 1 == count ? sentences.length : part).join(' ')  + '</p>';
            index++;
        }

        return paragraphs;
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
