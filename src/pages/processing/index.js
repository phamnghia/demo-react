import { useContext } from "react";
import AppContext from "../../context";

export default function LeadProcessingIndex() {
  const { setTitle, setActiveMenu } = useContext(AppContext);
  setTitle('Xử lý cơ hội');
  setActiveMenu('processing');
  
  return (
    <> Xử lý cơ hội </>
  )
}