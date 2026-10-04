import opticFiberImage from "../../assets/fibreOptic.jpg"
import microwaveBeamImage from '../../assets/onde.png'
import mobileNetworksImage from '../../assets/ReseauMobile.jpg'


 const Card_Data=[
        {
            id:1,
            description:'optical fiber',
            image:opticFiberImage,
            text:`Optical fiber is a thread whose core, very thin and made of glass or plastic, 
                  has the property of conducting light and is used for fibroscopy, lighting, or transmitting
                  digital data. It offers a data transfer rate much higher than that of coaxial cables and can 
                  serve as the backbone of a broadband network carrying television, telephone, videoconferencing,
                  or computer data. The principle of optical fiber dates back to the early 20th century, but it wasn't 
                  until 1970 that a fiber suitable for telecommunications was developed in the laboratories of the American
                  company Corning Glass Works.`,
        },
       {
            id:2,
            description:`Microwave bean`,
            image:microwaveBeamImage,
            text:`A microwave link is a signal transmission system — 
            mainly digital since the 2010s — that can be one-way or 
            two-way and is usually permanent, connecting two distant 
            fixed geographical sites. It uses radio waves as the medium,
            with carrier frequencies ranging from 1 to 86 GHz in the 
            microwave range, focused and concentrated using directional
            antennas called line-of-sight antennas. This system allows 
            for transmitting sound signals, broadcasting, video links,
            TV channels, or telecommunications, and can also exchange 
            digital data between the different points of the network it serves.`
        },
        {
            id:3,
            description:`Mobile phone networks`,
            image:mobileNetworksImage,
            text:`Mobile phone networks use electromagnetic waves, 
            just like networks for radio, TV, satellites, and other
             private communication networks like those for police, 
             paramedics, and others. To send information 
             (binary or analog), a channel is used. In GSM networks,
             this channel is carried on a specific frequency around 
             which the wave is modulated. It's better to keep some
             space between channels because if their frequencies 
             are too close, they overlap and cause interference.`
        }
]
export default Card_Data;