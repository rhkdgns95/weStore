import App, { Container } from "next/app";
import React from "react";
import Header from "../components/Header";
import Head from "next/head";

export default class MyApp extends App {
    
    /**
     * 
     *  @param {*} ctx 
     *  모든 page들은 app.js에 prop가 된다.
     *  그래서 ctx에는 Component와 router, ctx를 리턴해서 모든 page에서 사용하도록 한다.
     *  
     */
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if(Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }
        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
                <Head>
                    <title>Home | weStore</title>
                </Head>
                <Header />
                <Component { ...pageProps }/>
                <style jsx global>
                {`
                    html, body {
                        margin: 0;
                        padding: 0;
                    }
                `}
                </style>
            </div>
        )
        /**
         *  Container Deprecated!
         * 
         */
        // return (
        //     <Container>
        //         <Component />
        //     </Container>
        // ) 
    }
};