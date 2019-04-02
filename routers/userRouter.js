import express from "express";
import routes from "../routes";
import {
    userDetail,
    getEditProfile,
    getChangePassword,
    postEditProfile,
    postChangePassword
} from "../controllers/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

//회원정보 수정
userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

//비밀번호 변경
userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangePassword);
//프로필 세부정보
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;