import Head from "next/head";
import Link from "next/link";
import withLayout from "../lib/withLayout";

const Index = () => (
    <div>
        <Head>
            <title>Home | weStore</title>
        </Head>
        <h1>Hello world</h1>
        {/* 
            a에 href속성이아닌, Link에 거는이유는?
            Link가 a태그를 가지면, Link의 href을 넣어줄수있다.
            더 중요한점은 여기서 이 페이지에서 About페이지의 소스코드를 확인할수 있다는 점이다.
            즉, SEO에 더 최적화 되어있다.
        */}
        <Link href={"/about"}>
            <a>About Page</a>
        </Link>
    </div>
);

export default withLayout(Index);