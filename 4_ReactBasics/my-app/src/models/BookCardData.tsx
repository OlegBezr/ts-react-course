import { Person } from "./person";

class BookCardData {
    title: string;
    description: string;
    person: Person;

    constructor(title: string, description: string, person: Person) {
        this.title = title;
        this.description = description;
        this.person = person;
    }
}

export {BookCardData};