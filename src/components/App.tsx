import Contact from "./widget/constant/Contact"
import Hoc from "./widget/Hoc"

function App() {
  const Mycomp = Hoc(Contact)
  console.log("rendering from git")
  
  return (
    <>
      <Mycomp />

    </>
  )
}
export default App
