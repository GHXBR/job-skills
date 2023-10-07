import * as React from 'react'


export function Home() {
    let [checked, setChecked] = React.useState(true);
    return (<div>
        <label className="CheckboxLove">
            <input
            type="checkbox"
            className='checkbox'
            defaultValue="1"
            checked={checked}
            onChange={e => {setChecked(e.target.checked)}}
            />
            <span className='checkboxText'>Я ознакомлен(а) и принимаю 
            <a href="../"> пользовательское соглашение</a>    
            </span>
        </label>
    <div className="buttonLove">
        <button
        disabled= {!checked}
        type="submit"
        onClick={()=>{alert('Вы приняли пользовательское соглашение!')}}
        >
    <span>Принять</span>
    </button>
    </div>
    </div>
)}

export default Home;