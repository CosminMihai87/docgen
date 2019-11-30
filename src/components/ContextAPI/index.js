/**
 * @author: Cosmin Mihai <cosmin.mihai2612@gmail.com>
 */

import React, { useState } from "react";

export const GlobalContext = React.createContext({
  expandCard: false,
  startChat: false,
  chatSessionID: '',
  messageQueue: [],
  volumeValue: 50,
  updateExpandCard: () => {},
  updateStartChat: () => {},
  updateMessageQueue: () => {},
  updateVolumeValue: () => {},
  updateEndChat: () => {}
});

const IlLiveChatContext = props => {

  const [state, setState] = useState({
    expandCard: false,
    startChat: false,
    chatSessionID: '',
    volumeValue: 50,
    messageQueue: []
  });
  const updateExpandCardHandler = () => {
    setState({
      ...state,
      expandCard: !state.expandCard
    });
  };
  const updateStartChatHandler = (id,message) => {
    setState({
      ...state,
      ...{
        expandCard: true,
        startChat: true,
        chatSessionID: id,
        messageQueue: [...state.messageQueue, message]
      }
    });
  };
  const updateEndChatHandler = () => {
    setState({
      ...state,
      ...{
        expandCard: true,
        startChat: false,
        chatSessionID: '',
        messageQueue: []
      }
    });
  };
  const updateMessageQueueHandler = (message) => {
    setState({
      ...state,
      ...{ expandCard: true, startChat: true, messageQueue: [...state.messageQueue,message] }
    });
  };
  const updateVolumeValueHandler = (value) => {
    setState({
      ...state,
      volumeValue: value
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        data: state,
        updateExpandCard: updateExpandCardHandler,
        updateStartChat: updateStartChatHandler,
        updateMessageQueue: updateMessageQueueHandler,
        updateVolumeValue: updateVolumeValueHandler,
        updateEndChat: updateEndChatHandler
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default IlLiveChatContext;
