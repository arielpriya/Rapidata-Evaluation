import React, { useEffect, useState } from 'react';

import { imageService } from '../../services/image.service';

import Button from '../../components/formControls/button/Button'
import { useNavigate } from 'react-router-dom';

import { IImage } from '../../models/image.model';
import Canvas from '../../components/canvas/Canvas';

//empty for now
type Props = {

}

const Solving = (props: Props) => {
    // navigate to other screens 
    const navigate = useNavigate();
    // get image url
    const imageUrl = `${process.env.REACT_APP_IMAGE_URL}`
    const [image, setImage] = useState<string>("");
    const [target, setTarget] = useState<string>("");

    /**
     * to get image from api 
     */
    const getImagedata = () => {

        setTimeout(() => {
            imageService.getImage().then((response: IImage) => {
                setImage(response?.fileName);
                setTarget(response.target);
            });
        }, 300)
    }

    useEffect(() => {
        getImagedata()
    }, []);

     // to be continued
     const handleClick = () => {
        navigate('/thankyou')
    }

    const handleDraw = () => {

    }
    return (
        <div>
            <div>
                <h1 className='heading'>
                    Where is the {target}?
                </h1>
            </div>

            {image &&
                <Canvas draw={handleDraw} imageUrl={`${imageUrl}${image}`} ></Canvas>
            }
            <Button label='Next' onClick={handleClick} />
        </div>
    )
}

export default Solving