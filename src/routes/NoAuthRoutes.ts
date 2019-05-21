import {Router} from "express";
import {Dao} from '../dao/Dao';
import {UserController} from '../controllers/UserController';

export class NoAuthRoutes {
    public router: Router;
    private userController: UserController;

    constructor(dao: Dao) {
        this.router = Router();
        this.routes();

        this.userController = new UserController(dao);
    }

    private routes(): void {
        // Index url
        this.router.get('/', (req, res) => {
            res.status(200).json({
                code: 200,
                message: 'Welcome to StackOverflow Lite API'
            });
        });

        // Registration url
        this.router.post('/auth/register', (req, res) => {
            this.userController.registerCitizen(req, res);
        });
    }
}