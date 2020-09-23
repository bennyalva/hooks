const { renderHook } = require("@testing-library/react-hooks");
const { useFecth } = require("../../hooks/useFecth");

describe('tests useFecth', () => {
    test('should return default values', () => {
       const {result} = renderHook(() => useFecth(`https://www.breakingbadapi.com/api/quotes/1`));
       const {data, loading, error} = result.current;
       expect(data).toBe(null);
       expect(loading).toBe(true);
       expect(error).toBe(null);    
    });
    test('should getIfo correct', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFecth(`https://www.breakingbadapi.com/api/quotes/1`));
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        expect(data.length).toBe(1);
        expect(loading).toBe(false);
        expect(error).toBe(null);
    });
    test('should getIfo error', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFecth(`https://reqres.in/apid/users?page=2`));
        await waitForNextUpdate();
        const {data, loading, error} = result.current;
        expect(data).toBe(null);
        expect(loading).toBe(false);
        expect(error).toBe('any error');
    });
    
});
