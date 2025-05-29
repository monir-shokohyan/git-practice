import Contact from "./widget/constant/Contact"
import Hoc from "./widget/Hoc"

function App() {
  const Mycomp = Hoc(Contact)
  return (
    <>
      <Mycomp />

    </>
  )
}
export default App