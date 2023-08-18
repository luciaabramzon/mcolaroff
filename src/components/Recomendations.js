import '../styles/recomendations.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap
import Carousel from 'react-bootstrap/Carousel'; 
const Recomendations=()=>{
    
    const recommendations=[
        {
            name:"Martin Perez",
            job:"Director at the Sandbox",
            recom:"“I highly recommend Martin for any UX/UI design role, particularly in the web3 blockchain DeFi space. As a UX/UI Designer at The Sandbox Game, Martin demonstrated exceptional skill and creativity, a deep understanding of the blockchain industry and DeFi space, and a positive attitude and strong work ethic. Their designs were both functional and aesthetically pleasing, and they were always willing to collaborate and provide constructive feedback. Martin would make a significant impact on any design team they join.”"
        },
        {
            name:"Santiago Cassa",
            job:"QA Analyst at the Sandbox",
            recom:"“During my time working as a QA, I had the pleasure of collaborating with Martin on several projects. He was always patient and willing to explain design concepts to me, making it easier for me to understand and provide valuable feedback. His expertise in UX/UI design was evident in the quality of his work, which consistently met or exceeded expectations. Martin is not only a skilled designer, but also a great team player. He is always willing to lend a helping hand to his colleagues, and his positive attitude and approachable demeanor make him a pleasure to work with. He is a true professional who is dedicated to his craft and takes pride in his work.”"
        }
    ]
    return(
        <div className='recomendations'>
    <Carousel>
    {recommendations.map((rec)=>(
            <Carousel.Item key={rec.name} >
            <Carousel.Caption>
                <div className='text'>
              <h3 className='recommendationName'>{rec.name}</h3>
              <h3 className='recommendationJob'>{rec.job}</h3>
              <p className='recommendation'>{rec.recom}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
            ))}
      </Carousel>
        </div>
    )
}

export default Recomendations