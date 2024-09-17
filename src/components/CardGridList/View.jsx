import { useState } from "react";
import { BsViewList } from "react-icons/bs";
import { CiGrid41 } from "react-icons/ci";
import GridCard from "./GridCard"
// import ListCard from "../CardGridList/ListCard"

export default function View() {
  const [view, setView] = useState(false);

  return (
    <div>
        <div>  <CiGrid41 style={{marginRight: 10}}/>
        <BsViewList />
        </div>
        {/* <GridCard/> */}
    </div>
  );
}
