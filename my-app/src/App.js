import { CalcBtn } from './CalcBtn';
import { CalcBtnDouble } from './CalcBtnDouble';
import { CalcBtnTriple } from './CalcBtnTriple';
import { ResultScreen } from './ResultScreen';
import { CalcBtnFunction } from './CalcBtnFunction';

export const App = () => {
  return <div>
  <div>
  <ResultScreen text="Result" />
  </div>  
  <div> 
  <CalcBtnDouble text="C" />
  <CalcBtn text="<-" />
  <CalcBtnFunction text="÷" />
  </div>
  <div> 
  <CalcBtn text="7" />
  <CalcBtn text="8" />
  <CalcBtn text="9" />
  <CalcBtnFunction text="×" />
  </div>
  <div> 
  <CalcBtn text="4" />
  <CalcBtn text="5" />
  <CalcBtn text="6" />
  <CalcBtnFunction text="−" />
  </div>
  <div> 
  <CalcBtn text="1" />
  <CalcBtn text="2" />
  <CalcBtn text="3" />
  <CalcBtnFunction text="+" />
  </div>
  <div> 
  <CalcBtnTriple text="0" />
  <CalcBtnFunction text="=" />
  </div>
  </div> 
  
}

