import "./ItemData.css"

import SmallCard from "../../../../../ui/component/Card/SmallCard/SmallCard";

const ItemData = (props) => <div>
    <SmallCard className="item-data">
        {/* <img src={logo}/> */}
        <div>{props.name}</div>
        <div className="item-data__desc">{props.desc}</div>
    </SmallCard>
</div>

export default ItemData;