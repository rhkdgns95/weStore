import Head from "next/head";
import { DatePicker } from "antd";

export default () => (
    <div>
        <Head>
            <title>Index</title>
        </Head>
        <h1>
            index
            <DatePicker onChange={() => {}}/>
        </h1>
    </div>
);