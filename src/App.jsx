import Title from "./components/Title"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Data from "./components/Data"

export default function App() {
  const dataElements = Data.map(data => {
    return <Body
      key={data.id}
      data={data}
    />
  })

  return (
    <div className="main-container">
      <Title />
      {dataElements}
      <Footer />
    </div>
  )
}


