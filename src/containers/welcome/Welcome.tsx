import Timer from '../../components/timer/Timer';
import Button from '../../components/formControls/button/Button'
import { useNavigate } from "react-router-dom";

//empty for now
type Props = {

}
const Welcome = (props: Props) => {
    // navigate to other screens 
    const navigate = useNavigate();
    // on timer complete, automatically redirect to other screen
    const handleRedirect = (path: string) => {
        navigate(path);
    }
    // to be continued
    const handleClick = () => {
        //To be continued
    }
    return (
        <div>
            <div>
                <h1 className='heading'>
                    Welcome in Rapidata
                </h1>
            </div>
            <div className='text-20'>You will be redirecting to solving page where you will select the target from the image and then submit it.</div>
            <div className="paddingTop-5">
                <Button label="Let's go" onClick={handleClick} >
                    <Timer redirect={handleRedirect} />
                </Button>
            </div>
        </div>
    )
}

export default Welcome