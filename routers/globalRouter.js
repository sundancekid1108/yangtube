import express from "express";
import routes from "../routes";
import passport from "passport";
import { home, search } from "../controllers/videoController";
import { getJoin, postJoin, getLogin, logout, postLogin, githubLogin, postGithubLogin } from "../controllers/userController";
import { onlyPublic, onlyPrivate } from "../middlewares";

const globalRouter = express.Router();

//라우트 회원가입
globalRouter.get(routes.join, onlyPublic, getJoin);
globalRouter.post(routes.join, onlyPublic, postJoin, postLogin);


//라우트 로그인
globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin);

//라우트 home
globalRouter.get(routes.home, home);

//라우트 검색
globalRouter.get(routes.search, search);

//로그아웃
globalRouter.get(routes.logout, onlyPrivate, logout);

globalRouter.get(routes.gitHub, githubLogin);


globalRouter.get(
    routes.githubCallback,
    passport.authenticate("github", { failureRedirect: "/login" }),
    postGithubLogin
);

export default globalRouter;