
export default function Message({mes}) {

  return (
    <>
      <li key={mes.id} className="clearfix">
        <div className="message-data align-left">
          <i className="fa fa-circle me"></i>
          <span className="message-data-name">{mes.from.name}</span> &nbsp; &nbsp;
          <span className="message-data-time">{mes.time}</span>
        </div>
        <div className="message other-message float-left">
          {mes.text}
        </div>
      </li>
    </>
  );
}
