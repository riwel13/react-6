import List from "../List/List";


import { formatDate, formatDistance } from "../../utils/formatDate";

import { CardHolder, NameCard, ListInfo} from "./Cards.styled";

import { BsFillGeoAltFill } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { BsCalendarMinusFill } from "react-icons/bs";
import { RiTimeFill } from "react-icons/ri";

function Card({ name, location, speaker, type, time }) {
    return (
        <CardHolder key={name}>
            <NameCard>{name}</NameCard>

            <ListInfo>
                <List icon={<BsFillGeoAltFill />} info={location}></List>
                <List icon={<IoPersonSharp />} info={speaker}></List>
                <List icon={<BsCalendarMinusFill />} info={formatDate(time.start)}></List>
                <List icon={<RiTimeFill />} info={formatDistance(time.start, time.end)}></List>
            </ListInfo>
        </CardHolder>
    );
}

export default Card;
