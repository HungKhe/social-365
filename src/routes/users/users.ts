import { Application } from 'express';
import { userController } from '../../controller/users/userController'

export class Users {
    public userController: userController = new userController();
    public routes(app: Application): void{
        app.route("/user")
        .post(this.userController.onRegisterMember)

        app.route("/user/:id")
        .get(this.userController.onGetInforMember)
    }
}