import App from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

class MyApp extends App {
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
        const { Component, pageProps, apollo } = this.props;
        return (
            <ApolloProvider client={apollo}>
                <div>
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
            </ApolloProvider>
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

export default withApollo(MyApp);