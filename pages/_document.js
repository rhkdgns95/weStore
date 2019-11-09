import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name={"author"} content={"KKH"}/>
                    <link href={"/styles.css"} rel={"stylesheet"}/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
} 