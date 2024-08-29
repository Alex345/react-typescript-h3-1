
export default function Typing({mes}) {

  return (
    <>
      <li key={mes.id} className="clearfix">
        <div className="message-data align-left">
          <i className="fa fa-circle me"></i>
          <span className="message-data-name">{mes.from.name}</span> &nbsp; &nbsp;
          <span className="message-data-time">{mes.time}</span>
        </div>
        <div className="message typing float-left">
          <img src="./src/assets/img/800.gif" alt=""/>
        </div>
      </li>
    </>
  );
}
