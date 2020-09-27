import React from 'react';
import './normalize.css';
import './mrk-form.css';

function App() {
  return (
    <div className="App">
        <div>
            <form className={'mrk-form'}>
                Environment:
                <select>
                    <option>Dev</option>
                    <option>QA</option>
                </select>
                <div>last full results | last 10 runs | list or run tests
                    find last 10 runs by
                    <input type={'text'} placeholder={'email'}/>
                    <input type={'button'} value={'search'} />
                </div>
            </form>
        </div>
    </div>
  );
}

export default App;
