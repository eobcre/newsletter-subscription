import Title from './components/Title';
import CheckContents from './components/CheckContents';
import EmailInput from './components/EmailInput';
import SubscribeButton from './components/SubscribeButton';

const App: React.FC = () => {
  return (
    <div className='bg-[#DDE1FD] h-screen'>
      <div className='flex justify-center items-center h-screen'>
        <div className='bg-white rounded-md w-[710px] h-[320px]'>
          <Title />
          <CheckContents />
          <div className='flex gap-2 px-14 py-7'>
            <EmailInput />
            <SubscribeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
