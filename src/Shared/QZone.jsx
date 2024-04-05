import qZone1 from '../assets/qZone1.png';
import qZone2 from '../assets/qZone2.png';

const QZone = () => {
    return (
        <div className='mt-8'>
            <h1 className="font-bold text-xl mb-4">QZone</h1>
            <div>
                
            <img className='w-full' src={qZone1} alt="" />
                <img className='w-full' src={qZone2} alt="" />
            </div>
            
        </div>
    );
};

export default QZone;