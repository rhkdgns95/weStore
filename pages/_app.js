import App, { Container } from "next/app";
import React from "react";
import Header from "../components/Header";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <div>
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