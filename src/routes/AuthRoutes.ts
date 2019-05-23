import {Dao} from "../dao/Dao";
import {Router} from "express";
import {QuestionController} from "../controllers/QuestionController";
import {validationMiddleware} from "../middleware/joi-validator";
import {questionSchema} from "../joi/question-schema";

export class AuthRoutes {
    public router: Router;
    private questionsController: QuestionController;

    constructor(dao: Dao) {
        this.router = Router();
        this.questionRoutes();

        this.questionsController = new QuestionController(dao);
    }

    private questionRoutes(): void {
        // Add new question
        this.router.post('/questions', validationMiddleware(questionSchema, 'body'), (req, res) => {
           this.questionsController.newQuestion(req, res);
        });

        // Fetch all questions
        this.router.get('/questions', (req, res) => {
            this.questionsController.fetchAllQuestions(req, res);
        })
    }

}