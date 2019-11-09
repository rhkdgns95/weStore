import Link from "next/link";

export default (props) => (
    <div>
        <Link href={`/post?title=${props.title}`} as={`/post/${props.title}`}>
            <a>{ props.title }</a>
        </Link>
    </div>
)