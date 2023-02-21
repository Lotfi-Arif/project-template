
function InputField(props: InputFieldProps) {
    return (
        <div className="md:flex md:items-center mb-6">
            <div className="w-full">
                <input
                    name={props.name}
                    type={props.type}

                    value={props.value}
                    onChange={props.handler}
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-customBlue"
                    placeholder={props.label}

                />

            </div>
        </div>
    )
}

interface InputFieldProps {
    label: string,
    name: string,
    type: string,
    value: string
    handler: (event: any) => void

}



export default InputField

