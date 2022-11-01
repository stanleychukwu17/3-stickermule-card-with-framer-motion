import './app.scss';
// import { motion } from 'framer-motion';

// import the assets we will be using
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
const images = {img1, img6, img3, img4, img5, img2}

const App = () => {

    return (
        <div className="AppMain">
            <div className="imgGeneral">
                {Object.values(images).map(item => {
                    return (
                        <div className="ImgCvr" key={item}>
                            <img src={item} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default App;