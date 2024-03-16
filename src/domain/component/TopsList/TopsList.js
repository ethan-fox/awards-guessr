import "./TopsList.css"

import BigCard from "../../../ui/component/Card/BigCard/BigCard";
import TopsItem from "./TopsItem/TopsItem";

const TopsList = (props) => <BigCard className="tops-list">
    {props.entries.map(e => <TopsItem {...e}/>)}
</BigCard>

export default TopsList;