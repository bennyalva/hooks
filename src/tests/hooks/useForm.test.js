const { renderHook, act } = require("@testing-library/react-hooks");
const { useForm } = require("../../hooks/useForm");

describe('Use form tests', () => {
   const initialForm = {
       name: 'benny',
       email: 'benny@gmail.com',

   }
   test('should get initial form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [values, formChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof formChange).toBe('function');
    expect(typeof reset).toBe('function');
   });
   test('should change value form (name)', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, formChange, reset] = result.current;
    act(() => {
        formChange(
            {
             target: {
                 name: 'name',
                 value: 'Lucy'
             }
            }
        )
    });
    const [ values] = result.current;
    expect(values).toEqual({...initialForm, name: 'Lucy'})

   });
   test('should get re-initial form', () => {
    const {result} = renderHook(() => useForm(initialForm));
    const [, formChange, reset] = result.current;
    act(() => {
        formChange(
            {
             target: {
                 name: 'name',
                 value: 'Lucy'
             }
            }
        );
        reset();
    });
    const [ values] = result.current;
    expect(values).toEqual(initialForm)
       
}); 
   
    
});
