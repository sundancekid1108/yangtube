import express from "express";
import routes from "../routes";
import {
    users,
    userDetail,
    editProfile,
    changePassword
} from "../controllers/userController";

const userRouter = express.Router();

//회원정보 수정
userRouter.get(routes.editProfile, editProfile);

//비밀번호 변경
userRouter.get(routes.changePassword, changePassword);

//프로필 세부정보
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;