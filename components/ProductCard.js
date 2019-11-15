import { Card, Icon } from "antd";
import Link from "next/link";
const { Meta } = Card;

const Text = (text) => {
return <span style={{color: "black"}}>{text}</span>
}

export default ({ id, name, subtitle, photoUrl, price }) => (
    <div style={{ marginBottom: "25px" }}>
        <Link href={`/product?id=${id}`} as={`/product/${id}`} >
        <a>
            <Card
                hoverable
                actions={[ <Icon type="eye" theme={"outlined"}/> ]}
                cover={<img alt="example" src={photoUrl}/>}
            >
            {/* <Meta title={<Text text={name}/>} description ={<Text text={name}/>}/> */}
    
            </Card>
        </a>
        </Link>
    </div>
);