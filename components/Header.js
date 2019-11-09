import Link from "next/link";

const headerStyles = {
    border: "1px solid green"
}
export default () => (
    <header style={headerStyles}>
        <nav>
            <ul>
                <li>
                    <Link href={"/"}>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href={"/about"}>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>        
        <style jsx>
        {`
            ul {
                display: flex;
            }
            ul li {
                margin-right: 20px;
            }
            header {
                border-bottom: 1px solid gray;
            }
        `}
        </style>
    </header>
);