import { Layout } from "antd";
import App from "next/app";
import React from "react";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";

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

    /**
     *  componentDidMount()
     * 
     *  window(browser)에 service-worker가 존재하는지 확인하고
     *  설치한다.
     */
    componentDidMount() {
        if("serviceWorker" in navigator) {
            // file이 아닌 URL을 등록한다.
            navigator.serviceWorker
            .register("/sw.js")
            .then(result => console.log("SW Registered: ", result))
            .catch(err => console.log("Can`t register SW: ", err)); 
        }
    }
    render() {
        const { Component, pageProps, apollo } = this.props;
        return (
            <div>
                <ApolloProvider client={apollo}>
                    <ApolloHooksProvider client={apollo}>
                        <Layout>
                            <Component { ...pageProps }/>
                            {/* <Footer className={"foot"}>This is important</Footer> */}
                        </Layout>
                    </ApolloHooksProvider>
                </ApolloProvider>
            </div>
        )
    }
};
export default withApollo(MyApp);