import { Application } from 'express';
import userController from '../../controller/users/userController'

export class Users {
    // public userController: userController = new userController();
    public routes(app: Application): void {
        app.route("/user")
        .put(userController.onRegisterMember)
        .post(userController.onLoginMember)

        app.route("/user/:id")
        .get(userController.onGetInforMember);
    }
}