/**
 * 1.use form tag and onSubmit handler with event and name to get values
 * From e access e.target.[name of the field].value
 * 
 * 
 * 2.Controlled element : use individual field state for each input field and onChange
 * 
 * 3. Controlled element: one object holding all the input fields value.
 * 
 * 4.uncontrolled element: useRef() to create a reference to element and access value by using like : nameRef.current.value
 * 
 * Controlled Components
 * -----------------------------
 * In controlled component , the st age of the form element is controlled by React
 * 
 * The value of the input is set through the component's state and is updated through event handlers.
 * 
 * When the input value changes , the stage is updated, and React re-renders the component to reflect the new value
 * 
 * Controlled components offer more control over the form's behavior and provide a clear data flow
 * --------------------------------------------------
 * 
 * 
 * 5. use Hook to handle states and submit and error 
 * example react hook form
 * Reuseable component.
 * 
 * 
 */