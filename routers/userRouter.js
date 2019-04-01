import express from "express";
import routes from "../routes";
import {
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

//회원정보 수정
userRouter.get(routes.editProfile, onlyPrivate, editProfile);

//비밀번호 변경
userRouter.get(routes.changePassword, onlyPrivate, changePassword);

//프로필 세부정보
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;