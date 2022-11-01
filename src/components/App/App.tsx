import './app.scss';
import { motion, Variant } from 'framer-motion';

// import the assets we will be using
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
const images = {img1, img6, img3, img4, img5, img2}

// motion variant
const cardVariant: {initial?: Variant, animate?: Variant} = {
    initial: (custom) => ({
        y: -60, opacity:0,
        x: (custom % 2 === 0) ? 50 : -50,
    }),
    animate: (custom) => ({
        y:0, opacity:1, x:0,
        transition: {
            duration: .5,
            delay: custom * 0.2,
            ease: "easeOut"
        }
    })
};

const App = () => {
    return (
        <div className="AppMain">
            <div className="imgGeneral">
                {Object.values(images).map((item, index) => {
                    return (
                        <motion.div className="ImgCvr" key={item} variants={cardVariant} initial="initial" animate="animate" custom={index}>
                            <img src={item} alt="" />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
export default App;