

function Button(props: ButtonProps) {
    return (
        <button className="py-2 px-4 w-1/2 font-semibold rounded-lg shadow-md text-white bg-customBlue-light hover:bg-customBlue">
            {props.value}
        </button>
    )
}

interface ButtonProps {

    value: string,

}



export default Button

