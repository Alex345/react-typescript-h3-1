import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";

export default function MessageHistory({list}) {

  if(list.length === 0) return (<></>);

  return (
    <>
      <ul>
        {list.map( (item, key) => {
          return (
            ('message' === item.type) ? <Message mes={item} /> : ( ('response' === item.type) ? <Response mes={item} /> : <Typing mes={item} />)
          );
        })}
      </ul>
    </>
  );
}
