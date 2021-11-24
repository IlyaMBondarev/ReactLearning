import './Message.css';

function Message(props) {
  return (
    <div
      className="Message"
      style={ {color: "red", textAlign: "center", fontSize: "40px"} }
    >
      {props.msg}
    </div>
  )
}

export default Message;
