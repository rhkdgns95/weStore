import { Card, Icon } from "antd";
import Link from "next/link";
const { Meta } = Card;

export default ({ id, name, subtitle, photoUrl, price }) => (
    <div style={{ marginBottom: "25px" }}>
        <Link href={`/product?id=${id}`} as={`/product/${id}`} >
        <a>
            <Card
                hoverable
                actions={[ <Icon type="eye" theme={"outlined"}/> ]}
                cover={<img alt="example" src={photoUrl}/>}
            >
                <Meta title={name} description={subtitle}/>
            </Card>
        </a>
        </Link>
    </div>
);