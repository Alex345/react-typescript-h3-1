
export default function Response({mes}) {

  return (
    <>
      <li key={mes.id} className="clearfix">
        <div className="message-data align-right">
          <span className="message-data-time">{mes.time}</span> &nbsp; &nbsp;
          <span className="message-data-name">{mes.from.name}</span>
          <i className="fa fa-circle me"></i>
        </div>
        <div className="message other-message float-right">
          {mes.text}
        </div>
      </li>
    </>
  );
}
