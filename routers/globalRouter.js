import express from "express";
import routes from "../routes";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controllers/userController";

const globalRouter = express.Router();

//라우트 회원가입
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

//라우트 home
globalRouter.get(routes.home, home);

//라우트 검색
globalRouter.get(routes.search, search);



//라우트 로그인
globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

//로그아웃
globalRouter.get(routes.logout, logout);

export default globalRouter;