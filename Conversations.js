import React,{ useState} from "react";
import ConversationItem from "./ConversationItem";
import { useDispatch, useSelector } from "react-redux";

function Conversations(){
   const lightTheme = useSelector((state) => state.themeKey)

const  [conversations, setConversations] = useState([
    {
        name: "Test#1",
        lastMessage: "Last Message #1",
        timeStamp: "today",
    },
    {
        name: "Test#2",
        lastMessage: "last Message #2",
        timeStamp: "today",
    },
    {
        name: "Test#3",
        lastMessage: "last Message #3",
        timeStamp: "today",
    },
]);

return(
    <div className={"sb-conversation" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation) => {
          return (
            <ConversationItem props={conversation} key={conversation.name} />
          );
        })}
        </div>
);
}
export default Conversations;