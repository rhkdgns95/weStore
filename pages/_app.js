import { Layout } from "antd";
import App from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

const { Footer } = Layout;

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
                    <Layout>
                        <Component { ...pageProps }/>
                        <Footer>This is important</Footer>
                    </Layout>
                    
                </div>
            </ApolloProvider>
        )
    }
};

export default withApollo(MyApp);