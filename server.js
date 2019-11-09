const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

/**
 *  NextJS의 서버 구성
 * 
 * 
 *  1. express 서버 생성한다.
 *  2. server는 모든것으로 부터 데이터를 받는다.
 *  3. exporess 서버 요청받는 순서를 주의하도록 한다.
 *  이것들은 yarn dev의 next안에 있는 작업들이다.
 */
app
.prepare()
.then(() => {
    const server = express();
    
    server.get("/post/:title", (req, res) => {
        const actualPage = "/post";
        const queryParams = { title: req.params.title };
        app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log("> Ready on http://localhost:3000");
    })
}).catch(ex => {
    console.log(ex.stack);
    process.exit(1);
});