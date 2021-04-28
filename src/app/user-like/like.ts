import { User } from "../user";

export interface Like {
    isDelete: boolean,
    questionQuestionID: number,
    userId: number,
    user:User
}