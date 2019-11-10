import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    /**
     * 
     *  @param {*} ctx 
     *  ctx는 서버에서부터 온다.
     *  cookie와 session 등 모든 것을 볼 수 있다.
     *  server-side-rendering이 되는것이다. 
     * 
     *  이 getInitialProps는 우리가 커스텀 Document를 만들었기 때문에
     *  return { ...initialProps } 를 반환해야 한다.
     */
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps
        };
    }
    render() {
        return (
            <html>
                <Head>
                    <meta name={"author"} content={"KKH"}/>
                    <link href="//cdnjs.cloudflare.com/ajax/libs/antd/3.8.1/antd.min.css" rel="stylesheet"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
} 