import { BookCopy } from "./bookCopy";

export class User
{
    public id: number;
    public firstName: string;
    public lastName: string; 
    public createdDate: Date;
    public active: boolean;
    public avatarURL: string;
    public rentedBooks: BookCopy[];
}