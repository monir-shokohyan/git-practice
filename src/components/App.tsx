import Contact from "./widget/constant/Contact"
import Hoc from "./widget/Hoc"
import Menu from "./widget/Menu"

function App() {
  const Mycomp = Hoc(<Contact/>,<Menu/>,false)
  return (
    <>
      <Mycomp />

    </>
  )
}
export default App