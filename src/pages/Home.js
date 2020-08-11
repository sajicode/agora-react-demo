import React, {useState}  from 'react'
import { log, envs } from '../utils/utils'
import "./Home.css";
import { Button , notification} from 'antd';
import { Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {startBasicCall, leaveCall} from '../Agora_RTC'

export default function Home() {

  const [channel, setChannel] = useState('')
  const [isjoin, setIsJoin] = useState(false)

  const bindInputChannel = (event) => {
    setChannel(event.target.value)
  }

  const appid = envs.appId;
  const token = envs.token;

  const handleClickJoin = () => {
    if(!appid || !channel || !token) {
      if(!appid) {
        openNotification('appid')
      }
      if(!channel) {
        openNotification('channel')
      }
      if(!token) {
        openNotification('token')
      }
      return
    }

    let options = {
      appId: appid,
      channel: channel,
      token: token,
    }
    startBasicCall(options)
    log('join channel success')
    setIsJoin(true)
  }

  const handleClickLeave = () => {
    leaveCall()
    log('client leaves channel success')
    setIsJoin(false)
  }

  const openNotification = (placement) => {
    notification.open({
      message: 'Please enter complete information',
      description:
      `The ${placement} is empty`,
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };

  return (
    <div className='home-box'>
      <div className='title-box'>
        <span id='title-agora'>Bookings Africa</span>
      </div>
      <div className='message-box'>
        <div>
          <span className='text-agora'>Channel</span>
          <div className='input-box'>
            <Input placeholder="Enter Channel Name" value={channel} onChange={bindInputChannel} allowClear='true'/>
          </div>
        </div>
        <div className='click-box'>
          <div className='joinButton'>
            <Button className='join' onClick={handleClickJoin} disabled={isjoin}>Join</Button>
          </div>
          <div className='leaveButton'>
            <Button onClick={handleClickLeave} disabled={!isjoin}>Leave</Button>
          </div>
        </div>
      </div>
      <div className='video-agora-box'>
        <div id='video-agora-local'></div>
      </div>
    </div>
  )
}

