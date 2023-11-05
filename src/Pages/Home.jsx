import SliderCat from "../Component/SliderCat"
import SliderHomeMain from "../Component/SliderHomeMain"
import Layout from "../Layout/Layout"






function Home() {
  return (
    <Layout title={"Home"}>
      <SliderHomeMain />
      <SliderCat />
    </Layout>
  )
}

export default Home