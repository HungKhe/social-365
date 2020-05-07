import { Application } from 'express';
import { socialController } from '../../controller/socialController'

export class PostSocial {
    public socialController: socialController = new socialController();
    public routes(app: Application): void{
        app.route("/post-social")
        .get(this.socialController.onGetListPostSocial)
    }
}