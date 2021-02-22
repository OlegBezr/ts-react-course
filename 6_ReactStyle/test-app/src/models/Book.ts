class Book {
    title: string;
    description: string;
    backgroundColor: string;
    image: string;

    constructor(
        title: string,
        description: string,
        backgroundColor: string,
        image: string,
    ) {
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.image = image;
    }
}

export {Book};