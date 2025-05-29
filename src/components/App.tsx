import Contact from "./widget/constant/Contact"
import Hoc from "./widget/Hoc"

function App() {
  const Mycomp = Hoc(Contact)
  console.log("rendering from git now1")
  console.log("rendering from git now2")
  console.log("rendering from git now3")
  
  return (
    <>
      <Mycomp />

    </>
  )
}
export default App
