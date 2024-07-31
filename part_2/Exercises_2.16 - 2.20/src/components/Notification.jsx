

const Notification = ({message}) => {
  const notificationStyle = {
    borderStyle: 'solid',
    borderRadius:5,
    
    color: 'green',
    // backgroundColor: '#333',
    padding: 10,
    margin:20
  }
  return (
    <div >
      {
        message ? ( <div style={notificationStyle}>{message}</div> ): ""
      }
    </div>
  )
}

export default Notification
