import Title from './components/Title';
import CheckContents from './components/CheckContents';
import EmailInput from './components/EmailInput';
import SubscribeButton from './components/SubscribeButton';

const App = () => {
  return (
    <div>
      <div>
        <Title />
        <CheckContents />
        <EmailInput />
        <SubscribeButton />
      </div>
    </div>
  );
};

export default App;
