import { Button } from "@material-tailwind/react"
import { IoMdArrowRoundBack } from "react-icons/io"
import { Link } from "react-router-dom"

const BackButton = (props) => {
    return(
        <Link to={`/${props.path}`}>
            <Button color="blue" size="sm" className="rounded-full mb-2">
                <IoMdArrowRoundBack size={16} />
            </Button>
        </Link>
    )
}

export default BackButton