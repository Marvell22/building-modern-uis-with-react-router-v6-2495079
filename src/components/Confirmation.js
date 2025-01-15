import {useLocation} from 'react-router-dom';

export default function Confirmation() {
  const {State} = useLocation();

  return (
    <div className="container">
      <h1>Thank You!</h1>

      
      {State &&(
        <>
          <p>{State.name},You're now registered for Red30 Tech.</p>
          <p>WE've sent more details to <strong>{State.email}.</strong></p>
        </>
      )}
    </div>
  );
}
