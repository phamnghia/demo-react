import { useContext } from "react";
import AppContext from "../../context";

export default function LeadIndex() {
  const { setTitle, setActiveMenu } = useContext(AppContext);
  setTitle('Quản lý cơ hội');
  setActiveMenu('lead');

  
  return (
    <> Quản lý cơ hội </>
  )
}