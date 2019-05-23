import {Dao} from "../dao/Dao";
import {Request, Response} from "express";
import {IQuestion} from "../interfaces/IQuestion";

export class QuestionController {
    private dao: Dao;

    constructor(dao: Dao) {
        this.dao = dao;
    }

    // Function to add new question
    public newQuestion(request: Request, response: Response) {
        const question: IQuestion = request.body;
        question.userId = request.app.locals.userData.id;

        this.dao.addQuestion(question).then((result) => {
           response.status(200).json({code: 200, message: result.message});
        }).catch((error) => {
            response.status(400).json({code: 400, message: 'Error adding question', debug: error});
        });
    }

    // Function to fetch all questions
    public fetchAllQuestions(request: Request, response: Response) {
        this.dao.fetchAllQuestions().then((results) => {
            response.status(200).json({code: 200, data: results});
        }).catch((error) => {
            response.status(400).json({code: 400, message: 'Error fetching questions', debug: error});
        });
    }
}