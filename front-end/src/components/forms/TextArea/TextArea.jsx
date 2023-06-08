import './TextArea.css';

const TextArea = (props)=>{

    const { children, onChange } = props

    return(
        <div className='txContainer'>
            <textarea className="txarea" onChange={onChange}></textarea>
            <label className='lbtx'>{children}</label>
        </div>
    )
}

export default TextArea;