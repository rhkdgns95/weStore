const express = require("express");
const next = require("next");
const { resolve } = require("path");
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

    server.get("/sw.js", (req, res) => {
        app.serveStatic(req, res, resolve("./public/service-worker.js"));
    });

    server.get("/product/:id", (req, res) => {
        const actualPath = "/product";
        const queryParams = { id: req.params.id };
        app.render(req, res, actualPath, queryParams);
    });

    server.get("/category/:name", (req, res) => {
        const actualPath = "/category";
        const queryParams = { name: req.params.name };
        app.render(req, res, actualPath, queryParams);
    })
    
    server.get("*", (req, res) => {
        return handle(req, res);
    });

    server.listen(3000, err => {
        if(err) throw err;
        console.log("> Ready on http://localhost:3000");
    })
}).catch(ex => {
    console.error(ex.stack);
    process.exit(1);
});