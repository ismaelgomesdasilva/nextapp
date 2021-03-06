import Image from "next/image"
import { Button } from "../../components"
import { Container, BackgroundTop } from './style'



export const HomePage = () => (
    <>
        <Container>
            <div>

                <h1>Discover your next
                    place to travel
                    in Taiwan</h1>
                <p>Since 2020, we’ve guided more than
                    100.000 people to enjoy their best<br />
                    <b>Taiwan Experience</b></p>
                <Button title='Let’s Explore' />
            </div>
            <div className='PrimaryImage'>

                <Image src='/homeImage.svg' width={750} height={630} />
            </div>
        </Container>

        <BackgroundTop />
    </>

)

export default HomePage