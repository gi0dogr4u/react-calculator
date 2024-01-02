import { Input } from './components/Input';
import { Button } from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => (prev === '0' || isNaN(prev[prev.length - 1])) ? num : `${prev}${num}`);
  };
  
  const handleOperator = (operator) => {
    if (firstNumber !== '0' && operation !== '') {
      handleEqualNumber();
    }

    setFirstNumber(currentNumber);
    setCurrentNumber(prev => `${prev}${operator}`);
    setOperation(operator);
  };

  const handleEqualNumber = () => {
    if (firstNumber !== '0' && operation !== "" && currentNumber !== "0") {
      let result = 0;
  
      switch (operation) {
        case "+":
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case "-":
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case "x":
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case "/":
          result = Number(firstNumber) / Number(currentNumber);
          break;
        default:
          break;
      }
  
      setCurrentNumber(String(result).replace(/^0+/, ''));
      setFirstNumber('0');
      setOperation('');
    }
  };
  

  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')}/>
          <Button label="x" onClick={() => handleOperator('x')}/>
          <Button label="/" onClick={() => handleOperator('/')}/>
          <Button label="C" onClick={handleOnClear}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}/>
          <Button label="8" onClick={() => handleAddNumber('8')}/>
          <Button label="9" onClick={() => handleAddNumber('9')}/>
          <Button label="-" onClick={() => handleOperator('-')}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}/>
          <Button label="5" onClick={() => handleAddNumber('5')}/>
          <Button label="6" onClick={() => handleAddNumber('6')}/>
          <Button label="+" onClick={() => handleOperator('+')}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}/>
          <Button label="2" onClick={() => handleAddNumber('2')}/>
          <Button label="3" onClick={() => handleAddNumber('3')}/>
          <Button label="=" onClick={handleEqualNumber}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
