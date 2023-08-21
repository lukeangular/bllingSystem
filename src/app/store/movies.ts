export class Movie {
    id: number;
    name: string;
    earning: number;
    releaseDate: string;
    // add for advance selector
    username: string;

    constructor(
        name?: string,
        earning?: number,
        releaseDate?: string,
        username?: string,
    ) {
        this.name = name || '';
        this.earning = earning || 0;
        this.releaseDate = releaseDate || '';
        this.username = this.username || 'sundar';
    }
}