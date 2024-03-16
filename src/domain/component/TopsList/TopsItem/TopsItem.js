import "./TopsItem.css"

import BigCard from "../../../../ui/component/Card/BigCard/BigCard";
import ItemData from "./ItemData/ItemData";

const styleInfo = (props) => props.isDiscovered
? "tops-item__discovered"
: "tops-item__hidden";

const TopsItem = (props) => <BigCard className={styleInfo(props)}>
    <div>{props.idx}</div>
    <ItemData {...props} />
</BigCard>

export default TopsItem;