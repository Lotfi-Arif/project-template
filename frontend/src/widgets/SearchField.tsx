import PropTypes from 'prop-types'

export interface SearchFieldProps {

    onChange: Function
    search: string
    placeholder: string
}
function SearchField(props: SearchFieldProps) {
    return (

        <div className="w-full pt-2 ">
            <input onChange={((e) => props.onChange(e.target.value))} name="search" value={props.search} className=" text-white  block mx-auto w-2/3  m-2 rounded-full pl-7 pr-12 px-3 py-3 place-items-end border bg-customBlue  focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none border-none" placeholder={props.placeholder} />

        </div>

    )
}

SearchField.propTypes = {

}

export default SearchField

