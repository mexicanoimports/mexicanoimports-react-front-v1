import './style.css'

function InputForm({ textarea, height, type = 'text', placeHolder, label, onchange, value }) {
    return (
        <div className='input-form'>
            <h2>{label}</h2>
            {textarea ?
                <textarea style={{
                    height: height
                }}
                    value={value}
                    onChange={(e) => onchange(e.target.value)}
                    type={type}
                    placeholder={placeHolder} />
                :
                <input style={{
                    height: height
                }}
                    value={value}
                    onChange={(e) => onchange(e.target.value)}
                    type={type}
                    placeholder={placeHolder} />
            }
        </div>
    );
}

export default InputForm;