
import { renderHook , act} from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';
describe('User Counter tests', () => {
     test('should return default values', () => {
         
        const {result} = renderHook(() => useCounter());
        expect(result.current.counter).toBe(10)
        expect(typeof result.current.increment).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')

         
     });
     test('should return init value 100', () => {
         
        const {result} = renderHook(() => useCounter(100));
        expect(result.current.counter).toBe(100)

         
     });
     test('should counter add 1', () => {
        const {result} = renderHook(() => useCounter(100));
        const { increment, decrement, reset } = result.current;
        act(() => {
            increment();
        });
        expect(result.current.counter).toBe(101);
        act(() => {
            decrement();
        });
        expect(result.current.counter).toBe(99);
        act(() => {
            reset();
        });                 
        expect(result.current.counter).toBe(100);
         
     });
     
     
});
