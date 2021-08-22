import { Heading, Pane } from "evergreen-ui";
import AppContext from "../../../context";

export default function Header() {
  return (
  <AppContext.Consumer>
    {context => {
      return (
        <Pane className="site-title px-3 py-2">
          <Heading size={700}>{context.title}</Heading>
        </Pane>
      )
    }}
  </AppContext.Consumer>
  )
}