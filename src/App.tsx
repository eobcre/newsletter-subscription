import Title from './components/Title';
import CheckContents from './components/CheckContents';
import EmailInput from './components/EmailInput';
import SubscribeButton from './components/SubscribeButton';

const App = () => {
  return (
    <div className='bg-[#DDE1FD] h-screen'>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white rounded-md w-[680px] h-[320px]'>
          <Title />
          <CheckContents />
          <EmailInput />
          <SubscribeButton />
        </div>
      </div>
    </div>
  );
};

export default App;
