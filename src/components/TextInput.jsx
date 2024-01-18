function TextInput({label, value, onChange}) {
    return (
        <div>
            <label>{label}</label>
            <input
                // Access state changed and re render
                value={value}
                // Action to tell need to update state
                onChange={onChange}
            />
        </div>
    )
}

export default TextInput;