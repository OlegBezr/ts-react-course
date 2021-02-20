class Book {
    title: string;
    description: string;
    backgroundColor: string;
    image: string;
    displayImage: boolean;

    constructor(
        title: string,
        description: string,
        backgroundColor: string,
        image: string,
        displayImage: boolean,
    ) {
        this.title = title;
        this.description = description;
        this.backgroundColor = backgroundColor;
        this.image = image;
        this.displayImage = displayImage;
    }
}

export {Book};