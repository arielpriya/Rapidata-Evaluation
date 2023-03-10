import React, { useEffect, useState } from 'react';

import { imageService } from '../../services/image.service';

import Button from '../../components/formControls/button/Button'
import { useNavigate } from 'react-router-dom';

import { IImage } from '../../models/image.model';
import Canvas from '../../components/canvas/Canvas';
import { ICoordinates } from '../../models/coordinates.model';
import { boundingBoxService } from '../../services/boundingBox.service';
import { IBoundingBox } from '../../models/boundingBox.model';

//empty for now
type Props = {

}

const Solving = (props: Props) => {
    // navigate to other screens 
    const navigate = useNavigate();
    // get image url
    const imageUrl = `${process.env.REACT_APP_IMAGE_URL}`

    const [image, setImage] = useState<IImage>({
        id: '',
        fileName: '',
        target: ''
    });

    const [coordinates, setCoordinates] = useState<ICoordinates>({
        mouseX:0,
        mouseY:0,
        moveX:0,
        moveY:0
      })

    /**
     * to get image from api 
     */
    const getImagedata = () => {

        setTimeout(() => {
            imageService.getImage().then((response: IImage) => {

                setImage({
                    id: response.id,
                    fileName: response?.fileName,
                    target: response?.target
                });

            });
        }, 300)
    }

    useEffect(() => {
        getImagedata()
    }, []);

     // to be continued
     const handleNext = () => {

        console.log('coordinates', coordinates, )

       // here we will call the service and pass the co-ordinated to the model
        // const service = await boundingBoxService.saveBoundingBox()

        navigate('/thankyou')
    }

    const handleCoordinates = (coordinates:ICoordinates) => {
        setCoordinates(coordinates);

    }
    return (
        <div>
            <div>
                <h1 className='heading'>
                    Where is the {image.target}?
                </h1>
            </div>
            <div className='canvas-box'>
                {image.fileName &&
                    <Canvas 
                        handleCoordinate={(e:ICoordinates) => handleCoordinates(e)}
                        imageUrl={`${imageUrl}${image.fileName}`} 
                    />
                }
               
                <Button label='Next' onClick={handleNext} />
            </div>
        </div>
    )
}

export default Solving